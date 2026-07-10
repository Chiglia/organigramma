import { Component, inject, signal } from '@angular/core';
import { SelectModule } from 'primeng/select';


import { SharedModule } from '../../../shared.module';

import { Person } from '../../models/person.model';
import { Assignment } from '../../models/assignment.model';
import { Role } from '../../models/role.enum';
import { OrganizationService } from '../../services/organization-generator.service';
import { AvailabilityComponent } from "../availability/availability";
import { OrganizationComponent } from "../organization/organization";
import { HttpClient } from '@angular/common/http';
import { AddPersonModal } from './add-person-modal/add-person-modal';

export type ViewMode = 'role' | 'staff';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    AvailabilityComponent,
    OrganizationComponent,
    SelectModule,
    AddPersonModal
  ],
  templateUrl: './home.html',
})
export class Home {
  people = signal<Person[]>([]);

  viewMode: ViewMode = 'staff';

  viewModes = [
    {
      label: 'Per staff',
      value: 'staff',
    },
    {
      label: 'Per ruolo',
      value: 'role',
    }
  ];

  // UI state signals
  showAddPersonModal = signal(false);
  showClearConfirmation = signal(false);
  errorMsg = signal<string | null>(null);

  // Preset Selection Config
  selectedPreset = 'pd6_2025_6';
  presets = [
    { label: 'Lista Vuota', value: 'empty' },
    { label: 'PD6 2025/6', value: 'pd6_2025_6', url: 'data/people.json' },
    { label: 'Lista Personalizzata', value: 'custom', disabled: true }
  ];

  private organizationService = inject(OrganizationService);
  private http = inject(HttpClient);
  assignments = signal<Assignment[]>([]);
  hasGenerated = false;

  ngOnInit(): void {
    this.loadPreset(this.selectedPreset);
  }

  loadPreset(presetValue: string): void {
    const preset = this.presets.find((p) => p.value === presetValue);
    if (!preset) return;

    if (preset.url) {
      this.http.get<Omit<Person, 'availableRoles'>[]>(preset.url).subscribe({
        next: (data) => {
          this.people.set(
            data.map((person) => ({
              ...person,
              availableRoles: [],
            })),
          );
          this.assignments.set([]);
          this.hasGenerated = false;
          this.errorMsg.set(null);
        },
        error: (err) => {
          this.showErrorMessage(`Errore nel caricamento della lista preimpostata: ${preset.label}`);
          console.error(err);
        }
      });
    } else if (presetValue === 'empty') {
      this.people.set([]);
      this.assignments.set([]);
      this.hasGenerated = false;
    }
  }

  onPresetChange(): void {
    this.loadPreset(this.selectedPreset);
  }

  updateAvailability(people: Person[]) {
    this.people.set(people);
    // If the list is updated, change selected preset to custom unless it is empty
    if (people.length === 0) {
      this.selectedPreset = 'empty';
    } else {
      this.selectedPreset = 'custom';
    }
  }


  generateOrganization() {

    this.assignments.set(
      this.organizationService.generate(
        this.people(),
        this.viewMode
      )
    );

    this.hasGenerated = true;

  }
  onViewModeChange() {
    this.hasGenerated = false;
    this.assignments.set([]);
  }

  removeAssignment(assignment: Assignment) {
    this.assignments.update((list) => list.filter((a) => a !== assignment));
  }

  // --- NEW CUSTOM FEATURES ---

  openAddPersonModal(): void {
    this.showAddPersonModal.set(true);
  }

  closeAddPersonModal(): void {
    this.showAddPersonModal.set(false);
  }

  onPersonAdded(event: { name: string; roles: Role[] }): void {
    const currentPeople = this.people();
    const maxId = currentPeople.reduce((max, p) => (p.id > max ? p.id : max), 0);
    const newId = maxId + 1;

    const newPerson: Person = {
      id: newId,
      name: event.name.trim(),
      availableRoles: event.roles,
    };

    this.people.set([...currentPeople, newPerson]);
    this.selectedPreset = 'custom';
    this.closeAddPersonModal();
  }

  askClearAllPeople(): void {
    this.showClearConfirmation.set(true);
  }

  cancelClearAllPeople(): void {
    this.showClearConfirmation.set(false);
  }

  confirmClearAllPeople(): void {
    this.people.set([]);
    this.assignments.set([]);
    this.hasGenerated = false;
    this.showClearConfirmation.set(false);
    this.selectedPreset = 'empty';
  }

  onJsonUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const data = JSON.parse(text);

        if (!Array.isArray(data)) {
          this.showErrorMessage('Il file JSON deve contenere un array di persone.');
          return;
        }

        const parsedPeople: Person[] = data.map((item: any, index: number) => {
          return {
            id: typeof item.id === 'number' ? item.id : index + 1,
            name: typeof item.name === 'string' ? item.name : 'Senza nome',
            availableRoles: Array.isArray(item.availableRoles) ? item.availableRoles : [],
          };
        });

        this.people.set(parsedPeople);
        this.selectedPreset = 'custom';
        this.assignments.set([]);
        this.hasGenerated = false;
        this.errorMsg.set(null);

        // Reset file input so same file can be uploaded again if needed
        input.value = '';
      } catch (err) {
        this.showErrorMessage('Errore nel parsing del file JSON. Assicurati che sia un JSON valido.');
        console.error(err);
      }
    };

    reader.readAsText(file);
  }

  showErrorMessage(msg: string): void {
    this.errorMsg.set(msg);
    setTimeout(() => {
      if (this.errorMsg() === msg) {
        this.errorMsg.set(null);
      }
    }, 6000);
  }

  dismissError(): void {
    this.errorMsg.set(null);
  }

  exportJson(): void {
    try {
      const dataStr = JSON.stringify(this.people(), null, 2);
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

      const exportFileDefaultName = 'organigramma-capi.json';

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    } catch (err) {
      this.showErrorMessage("Errore durante l'esportazione del file JSON.");
      console.error(err);
    }
  }
}