import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ListComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  empObj: Employee = {
    name: '',
    designation: '',
    salary: ''
  };
  employees: Employee[] = [];
  designationOptions = ['Manager', 'Developer', 'Designer', 'Analyst'];
  editIndex: number | null = null;

  onSubmit() {
    if (this.editIndex !== null) {
      this.employees[this.editIndex] = { ...this.empObj };
      this.editIndex = null;
    } else {
      this.employees.push({ ...this.empObj });
    }
    this.resetForm();
  }

  editEmployee(employee: Employee) {
    this.editIndex = this.employees.indexOf(employee);
    this.empObj = { ...employee };
  }

  deleteEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
    this.resetForm();
  }

  resetForm() {
    this.empObj = { name: '', designation: '', salary: '' };
    this.editIndex = null;
  }
}

export interface Employee {
  name: string;
  designation: string;
  salary: string;
}
