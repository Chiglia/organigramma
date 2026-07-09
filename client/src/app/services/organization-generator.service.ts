import { Injectable } from '@angular/core';

import { Person } from '../models/person.model';
import { Assignment } from '../models/assignment.model';
import { ViewMode } from '../pages/home/home';

import { Staff } from '../models/staff.enum';
import { Role } from '../models/role.enum';

@Injectable({
    providedIn: 'root',
})
export class OrganizationService {
    generate(people: Person[], viewMode: ViewMode): Assignment[] {
        const assignments: Assignment[] = [];

        people.forEach((person) => {
            if (viewMode === 'role') {
                person.availableRoles.forEach((role) => {
                    assignments.push({
                        person,

                        role,
                    });
                });
            } else {
                const staffs = new Set<Staff>();

                person.availableRoles.forEach((role) => {
                    staffs.add(this.roleToStaff(role));
                });

                staffs.forEach((staff) => {
                    assignments.push({
                        person,

                        staff,
                    });
                });
            }
        });

        return assignments;
    }

    private roleToStaff(role: Role): Staff {
        switch (role) {
            case Role.AIUTO_LC:
            case Role.CU_LC:
                return Staff.LC;

            case Role.AIUTO_EG:
            case Role.CU_EG:
                return Staff.EG;

            case Role.MAESTRO_NOVIZI:
                return Staff.MDN;

            case Role.AIUTO_RS:
            case Role.CU_RS:
                return Staff.RS;

            case Role.AIUTO_CG:
                return Staff.AIUTO_CG;

            case Role.CG:
                return Staff.CG;
        }
    }
}
