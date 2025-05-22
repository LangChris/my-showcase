
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
  contactPhone = '1+ 703 • 887 • 9385'
  contactEmail = 'christopherjlang01@gmail.com';
  githubHandle = 'LangChris';
  subtitle = 'Full Stack Engineer';
  certifications = [
    { title: 'AWS Certified Developer - Associate', date: '2025-05-23' },
    { title: 'Agile SAFe Certified', date: '2023-10-01' },
  ];
  technicalSkills = {
    'Java Technologies': ['Java', 'JDBC'],
    'AWS Cloud': ['SAM', 'DynamoDB', 'S3', 'Lambda', 'SQS', 'RDS'],
    'DevOps': ['CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions'],
    'Frameworks': ['Spring (Boot/MVC/JDBC)', 'Hibernate', 'Log4j', 'Maven', 'JUnit'],
    'Development Practices': ['Agile', 'Scrum', 'Kanban', 'TDD', 'Pair Programming'],
    'Databases': ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB'],
    'Web Programming': ['Angular', 'AngularJS', 'React', 'HTML', 'XML', 'CSS', 'JavaScript', 'Node JS', 'TypeScript'],
    'EAI / SOA': ['REST', 'SOAP', 'JSON', 'SOA', 'XSD', 'XML', 'WSDL'],
    'Servers': ['Tomcat', 'Apache', 'Nginx', 'IIS'],
    'Tools': ['VS Code', 'Eclipse', 'IntelliJ', 'Postman', 'Swagger', 'Jira', 'Sonarcube'],
    'Version Control': ['Git', 'GitLab'],
    'Operating Systems': ['Linux', 'unix', 'Windows', 'Mac OS'],
  };

  workExperience = [
    {
      title: 'Full Stack Engineer',
      company: 'IBM',
      startDate: '2019-08-26',
      endDate: 'Present',
      description: 'Developed and maintained web applications using Angular, Node.js, and AWS services.',
      tasks: [
        'Designed and implemented RESTful APIs using Node.js and Express.',
        'Developed front-end applications using Angular and TypeScript.',
        'Integrated AWS services such as S3, DynamoDB, and Lambda into applications.',
        'Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.',
        'Participated in code reviews and provided constructive feedback to team members.',
        'Implemented CI/CD pipelines using Jenkins and GitHub Actions.',
        'Utilized Agile methodologies to manage project timelines and deliverables.',
        'Conducted unit testing and debugging to ensure software quality and performance.',
        'Mentored junior developers and provided technical guidance on best practices.',
        'Maintained documentation for software design, architecture, and APIs.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'TaxToken',
      startDate: '2017-06-01',
      endDate: '2019-08-25',
      description: 'Worked on various projects involving Java, Spring, and AWS technologies.',
      tasks: [
        'Developed and maintained Java applications using Spring Boot and Hibernate.',
        'Implemented RESTful APIs and integrated with front-end applications.',
        'Utilized AWS services such as EC2, RDS, and S3 for application deployment and storage.',
        'Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives.',
        'Collaborated with QA teams to ensure software quality through testing and bug fixing.'
      ]
    }
  ];

  clients = [
    {
      name: 'GSA',
      testimonial: '"Chris brought exceptional full-stack and AWS knowledge to our team, consistently delivering high-quality solutions under tight deadlines."'
    },
    {
      name: 'AHRQ',
      testimonial: '"As Lead Software Engineer, Chris was the backbone of our early platform. His leadership and technical depth were instrumental in our success and acquisition."'
    },
    {
      name: 'TSA',
      testimonial: '"Chris was a key player in our team, demonstrating strong technical skills and a commitment to delivering high-quality software solutions."'
    },
    {
      name: 'FCC',
      testimonial: '"Chris played a crucial role in our project, showcasing his expertise in full-stack development and cloud technologies."'
    }
  ];
  activeClientIndex: number | null = this.clients.length - 1;

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
    'screenshots/app1.PNG',
    'screenshots/app2.PNG',
    'screenshots/app3.PNG',
    'screenshots/app4.PNG'
  ];

  milestones = [
    { year: 2012, title: 'Studied Computer Science at Radford', side: 'left' },
    { year: 2017, title: 'TaxToken Startup: Lead Software Engineer', side: 'right' },
    { year: 2018, title: 'Sold TaxToken', side: 'right' },
    { year: 2019, title: 'Joined Octo Consulting', side: 'left' },
    { year: 2021, title: 'Contract Proposal Awarded $60M', side: 'left' },
    { year: 2024, title: 'Acquired by IBM', side: 'right' }
  ];

  techSearch: string = '';

  normalize(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // remove punctuation
      .trim();
  }

  matchesSearch(group: { key: string; value: string[] }): boolean {
    if (!this.techSearch.trim()) return false;

    const qTokens = this.normalize(this.techSearch).split(/\s+/);

    const target = this.normalize(group.key + ' ' + group.value.join(' '));

    return qTokens.every(token => target.includes(token));
  }

  toggleClient(index: number): void {
    this.activeClientIndex = index;
  }
}
