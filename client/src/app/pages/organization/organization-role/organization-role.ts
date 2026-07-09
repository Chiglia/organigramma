import { Component, input, Input } from '@angular/core';

import { TagModule } from 'primeng/tag';
import { DragDropModule } from 'primeng/dragdrop';

import { Assignment } from '../../../models/assignment.model';
import { Role } from '../../../models/role.enum';
import { SharedModule } from '../../../../shared.module';

import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-organization-role',

  standalone: true,

  imports: [SharedModule, TagModule, DragDropModule],

  templateUrl: './organization-role.html',
})
export class OrganizationRoleComponent {

  @Input({ required: true })
  assignments: Assignment[] = [];

  @Output()
  assignmentRemove = new EventEmitter<Assignment>();

  draggedAssignment?: Assignment;

  readonly roles = Object.values(Role);

  dragStart(assignment: Assignment): void {
    this.draggedAssignment = assignment;
  }

  dropPerson(targetRole: Role): void {
    if (!this.draggedAssignment) {
      return;
    }

    this.draggedAssignment.role = targetRole;

    this.draggedAssignment = undefined;
  }

  getPeopleByRole(role: Role): Assignment[] {
    return this.assignments.filter((assignment) => assignment.role === role);
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

  removeAssignment(
    assignment: Assignment
  ): void {

    this.assignmentRemove.emit(assignment);

  }
}
