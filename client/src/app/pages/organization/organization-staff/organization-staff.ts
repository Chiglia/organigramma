import { Component, EventEmitter, input, Input, Output } from '@angular/core';

import { TagModule } from 'primeng/tag';
import { DragDropModule } from 'primeng/dragdrop';

import { SharedModule } from '../../../../shared.module';

import { Assignment } from '../../../models/assignment.model';
import { Staff } from '../../../models/staff.enum';

@Component({
  selector: 'app-organization-staff',
  standalone: true,
  imports: [SharedModule, TagModule, DragDropModule],
  templateUrl: './organization-staff.html',
})
export class OrganizationStaffComponent {

  @Input({ required: true })
  assignments: Assignment[] = [];

  @Output()
  assignmentRemove = new EventEmitter<Assignment>();

  draggedAssignment?: Assignment;

  staffSections = [
    {
      staff: Staff.LC,
      label: 'LC',
      color: 'bg-yellow-200',
    },

    {
      staff: Staff.EG,
      label: 'EG',
      color: 'bg-green-200',
    },

    {
      staff: Staff.MDN,
      label: 'Maestro dei novizi',
      color: 'bg-red-200',
    },

    {
      staff: Staff.RS,
      label: 'RS',
      color: 'bg-red-200',
    },

    {
      staff: Staff.AIUTO_CG,
      label: 'Aiuto CG',
      color: 'bg-purple-200',
    },

    {
      staff: Staff.CG,
      label: 'CG',
      color: 'bg-purple-200',
    },
  ];

  getAssignmentsByStaff(staff: Staff): Assignment[] {
    return this.assignments.filter((assignment) => assignment.staff === staff);
  }

  dragStart(assignment: Assignment): void {
    this.draggedAssignment = assignment;
  }

  dropPerson(targetStaff: Staff): void {
    if (!this.draggedAssignment) {
      return;
    }

    this.draggedAssignment.staff = targetStaff;

    this.draggedAssignment = undefined;
  }

  removeAssignment(
    assignment: Assignment
  ): void {

    this.assignmentRemove.emit(assignment);

  }
}
