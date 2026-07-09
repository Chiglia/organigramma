import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { Person } from '../../../models/person.model';
import { Role } from '../../../models/role.enum';

@Component({
  selector: 'app-add-person-modal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-person-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPersonModal {
  close = output<void>();
  add = output<{ name: string; roles: Role[] }>();

  newPersonName = signal('');
  newPersonRoles = signal<Role[]>([]);
  rolesList = Object.values(Role);

  toggleNewPersonRole(role: Role): void {
    const current = this.newPersonRoles();
    if (current.includes(role)) {
      this.newPersonRoles.set(current.filter((r) => r !== role));
    } else {
      this.newPersonRoles.set([...current, role]);
    }
  }

  isRoleSelected(role: Role): boolean {
    return this.newPersonRoles().includes(role);
  }

  onSubmit(): void {
    const name = this.newPersonName().trim();
    if (!name) return;

    this.add.emit({
      name,
      roles: this.newPersonRoles(),
    });
  }

  onCancel(): void {
    this.close.emit();
  }

  getRoleDotColor(role: Role): string {
    switch (role) {
      case Role.AIUTO_LC:
      case Role.CU_LC:
        return 'bg-amber-400';
      case Role.AIUTO_EG:
      case Role.CU_EG:
        return 'bg-emerald-500';
      case Role.MAESTRO_NOVIZI:
      case Role.AIUTO_RS:
      case Role.CU_RS:
        return 'bg-rose-500';
      case Role.AIUTO_CG:
      case Role.CG:
        return 'bg-violet-500';
      default:
        return 'bg-slate-400';
    }
  }
}
