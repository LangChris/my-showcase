import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
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

}
