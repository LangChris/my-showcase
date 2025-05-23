
import { Component } from '@angular/core';

type CodeSnippet = {
  title: string;
  language: string;
  code: string;
  header?: string;
}

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  validationExample = `
import { object, string } from 'yup';

const schema = object({
  email: string().email().required(),
  password: string().min(8).required()
});
  `.trim();

  yupSchemaExample = `
import { object, string } from 'yup';

const schema = object({
  name: string().required('Name is required'),
  email: string().email().required('Email is required'),
  phone: string()
    .matches(/^[0-9]{1,3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/, 'Phone number is not valid')
    .required('Phone number is required')
});
  `.trim();

  htmlFormExample = `
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
  `.trim();

  contactName = 'Chris Lang';
  subtitle = 'Full Stack Engineer';
  location = 'Fairfax, VA';
  contactPhone = '1+ 703 • 887 • 9385'
  contactEmail = 'christopherjlang01@gmail.com';
  website = 'www.langdevelopments.com';
  githubHandle = 'LangChris';

  projects = ['MyBudgetLab', 'ProxyPeek Chrome Extension', 'SuperHeroMod for CS:CZ'];
  codeSnippets: CodeSnippet[] = [
    {
      header: 'Yup Validation',
      title: 'Dynamic Form Validation (Yup + Angular Reactive Forms)',
      language: 'Typescript',
      code: this.validationExample
    },
    {
      title: 'Yup Schema Example',
      language: 'Typescript',
      code: this.yupSchemaExample,
    },
    {
      header: 'HTML Form',
      title: 'HTML Template for Dynamic Form',
      language: 'HTML',
      code: this.htmlFormExample
    }
  ];

  screenshots = [
    'screenshots/budget-lab-preview.png',
    'screenshots/arwhome-preview.png',
    'screenshots/christmas-list-preview.png',
    'screenshots/realestate-calculator-preview.png',
  ];

  scrollTo(sectionId: 'top' | 'mid' | 'bottom'): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
