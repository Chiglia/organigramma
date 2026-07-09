import { Role } from "./role.enum";

export interface Person {
    id: number;
    name: string;
    availableRoles: Role[];
}