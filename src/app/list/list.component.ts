import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { Employee } from '../form/form.component';
import { FormComponent } from '../form/form.component';
import { Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormComponent, MatButtonModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() employees: Employee[] = [];
  @Output() editEmployee = new EventEmitter<Employee>();
  @Output() deleteEmployee = new EventEmitter<Employee>();

  onEdit(employee: Employee) {
    this.editEmployee.emit(employee);
  }

  onDelete(employee: Employee) {
    // Remove the employee from the employees array
    this.employees = this.employees.filter((emp) => emp !== employee);

    // Emit the deleted employee
    this.deleteEmployee.emit(employee);
  }
}
