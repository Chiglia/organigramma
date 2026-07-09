import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared.module';

import { CardModule } from 'primeng/card';
import { Assignment } from '../../models/assignment.model';
import { OrganizationRoleComponent } from './organization-role/organization-role';
import { OrganizationStaffComponent } from './organization-staff/organization-staff';
import { ViewMode } from '../home/home';


@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    CardModule,
    OrganizationRoleComponent,
    OrganizationStaffComponent
  ],
  templateUrl: './organization.html',
})
export class OrganizationComponent {
  @Input({ required: true })
  assignments: Assignment[] = [];

  @Input()
  viewMode: ViewMode = 'staff';
}
