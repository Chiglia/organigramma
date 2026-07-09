import { Component, inject, signal } from '@angular/core';
import { SelectModule } from 'primeng/select';


import { SharedModule } from '../../../shared.module';

import { Person } from '../../models/person.model';
import { Assignment } from '../../models/assignment.model';
import { OrganizationService } from '../../services/organization-generator.service';
import { AvailabilityComponent } from "../availability/availability";
import { OrganizationComponent } from "../organization/organization";
import { HttpClient } from '@angular/common/http';

export type ViewMode = 'role' | 'staff';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    AvailabilityComponent,
    OrganizationComponent,
    SelectModule
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


  private organizationService = inject(OrganizationService);
  private http = inject(HttpClient);
  assignments = signal<Assignment[]>([]);
  hasGenerated = false;

  ngOnInit(): void {
    this.http.get<Omit<Person, 'availableRoles'>[]>('data/people.json').subscribe((data) => {
      this.people.set(
        data.map((person) => ({
          ...person,
          availableRoles: [],
        })),
      );
    });
  }

  updateAvailability(people: Person[]) {
    this.people.set(people);
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
}