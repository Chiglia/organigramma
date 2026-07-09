import { Person } from "./person.model";
import { Role } from "./role.enum";
import { Staff } from "./staff.enum";

export interface Assignment {
    person: Person;
    role?: Role;
    staff?: Staff;
}