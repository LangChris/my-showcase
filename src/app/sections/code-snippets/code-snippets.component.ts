import { Component } from '@angular/core';

type CodeSnippet = {
  title: string;
  language: string;
  code: string;
  header?: string;
}

@Component({
  selector: 'app-code-snippets',
  templateUrl: './code-snippets.component.html',
  styleUrl: './code-snippets.component.scss'
})
export class CodeSnippetsComponent {
  codeSnippets: CodeSnippet[] = [
    {
      header: 'Yup Validation',
      title: 'Dynamic Form Validation (Yup + Angular Reactive Forms)',
      language: 'Typescript',
      code: `
import { object, string } from 'yup';

const schema = object({
  email: string().email().required(),
  password: string().min(8).required()
});
      `.trim()
    },
    {
      title: 'Yup Schema Example',
      language: 'Typescript',
      code: `
import { object, string } from 'yup';

const schema = object({
  name: string().required('Name is required'),
  email: string().email().required('Email is required'),
  phone: string()
    .matches(/^[0-9]{1,3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/, 'Phone number is not valid')
    .required('Phone number is required')
});
      `.trim()
    },
    {
      header: 'HTML Form',
      title: 'HTML Template for Dynamic Form',
      language: 'HTML',
      code: `
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div>
    <label for="name">Name</label>
    <input id="name" formControlName="name" />
    <div *ngIf="form.get('name').invalid && form.get('name').touched">
      {{ form.get('name').errors.required ? 'Name is required' : '' }}
    </div>
  </div>
  <div>
    <label for="email">Email</label>
    <input id="email" formControlName="email" />
    <div *ngIf="form.get('email').invalid && form.get('email').touched">
      {{ form.get('email').errors.email ? 'Email is not valid' : '' }}
      {{ form.get('email').errors.required ? 'Email is required' : '' }}
    </div>
  </div>
  <div>
    <label for="phone">Phone</label>
    <input id="phone" formControlName="phone" />
    <div *ngIf="form.get('phone').invalid && form.get('phone').touched">
      {{ form.get('phone').errors.matches ? 'Phone number is not valid' : '' }}
      {{ form.get('phone').errors.required ? 'Phone number is required' : '' }}
    </div>
  </div>
  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>
      `.trim()
    }
  ];
}
