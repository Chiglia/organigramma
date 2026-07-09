import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared.module';

import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { Person } from '../../models/person.model';
import { Role } from '../../models/role.enum';
import { ViewMode } from '../home/home';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [SharedModule, FormsModule, TableModule, CheckboxModule],
  templateUrl: './availability.html',
})
export class AvailabilityComponent {
  @Input()
  people: Person[] = [];

  @Output()
  availabilityChange = new EventEmitter<Person[]>();

  @Input()
  viewMode: ViewMode = 'staff';

  readonly roles = Object.values(Role);

  toggleAllRoles(person: Person): void {
    if (this.hasAllRoles(person)) {
      person.availableRoles = [];
    } else {
      person.availableRoles = [...this.roles];
    }

    this.emitChange();
  }

  hasAllRoles(person: Person): boolean {
    return person.availableRoles.length === this.roles.length;
  }

  hasColumnRole(person: Person, roles: Role[]): boolean {
    return roles.some((role) => person.availableRoles.includes(role));
  }

  toggleColumnRole(person: Person, roles: Role[]): void {
    const active = this.hasColumnRole(person, roles);

    if (active) {
      person.availableRoles = person.availableRoles.filter((role) => !roles.includes(role));
    } else {
      person.availableRoles = [...person.availableRoles, ...roles];
    }

    this.emitChange();
  }

  get tableColumns() {
    if (this.viewMode === 'role') {
      return this.roles.map((role) => ({
        label: this.getShortRole(role),

        roles: [role],
      }));
    }

    return [
      {
        label: 'LC',
        roles: [Role.AIUTO_LC, Role.CU_LC],
      },
      {
        label: 'EG',
        roles: [Role.AIUTO_EG, Role.CU_EG],
      },
      {
        label: 'MDN',
        roles: [Role.MAESTRO_NOVIZI],
      },
      {
        label: 'RS',
        roles: [Role.AIUTO_RS, Role.CU_RS],
      },
      {
        label: 'Aiuto CG',
        roles: [Role.AIUTO_CG],
      },
      {
        label: 'CG',
        roles: [Role.CG],
      },
    ];
  }

  removePerson(person: Person): void {
    this.people = this.people.filter((p) => p.id !== person.id);
    this.emitChange();
  }

  private emitChange(): void {
    this.availabilityChange.emit(this.people);
  }

  getShortRole(role: Role): string {
    const labels: Record<Role, string> = {
      [Role.AIUTO_LC]: 'A LC',
      [Role.CU_LC]: 'CU LC',
      [Role.AIUTO_EG]: 'A EG',
      [Role.CU_EG]: 'CU EG',
      [Role.MAESTRO_NOVIZI]: 'MDN',
      [Role.AIUTO_RS]: 'A RS',
      [Role.CU_RS]: 'CU RS',
      [Role.AIUTO_CG]: 'A CG',
      [Role.CG]: 'CG',
    };

    return labels[role];
  }

  getRoleColor(role: Role): string {
    switch (role) {
      case Role.AIUTO_LC:
      case Role.CU_LC:
        return 'bg-yellow-100';

      case Role.AIUTO_EG:
      case Role.CU_EG:
        return 'bg-green-100';

      case Role.MAESTRO_NOVIZI:
      case Role.AIUTO_RS:
      case Role.CU_RS:
        return 'bg-red-100';

      case Role.AIUTO_CG:
      case Role.CG:
        return 'bg-purple-100';

      default:
        return '';
    }
  }
}
