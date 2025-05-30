import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
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

  getHTMLValues(group: { key: string; value: string[] }): string {
    if (!this.techSearch.trim()) return group.value.join(', ');

    return group.value
      .map(value => {
        const normalizedValue = this.normalize(value);
        const qTokens = this.normalize(this.techSearch).split(/\s+/);
        const highlightedValue = qTokens.reduce((acc, token) => {
          if (normalizedValue.includes(token)) {
            return acc.replace(new RegExp(token, 'gi'), `<span class="highlight-text">${token}</span>`);
          }
          return acc;
        }, value);
        return highlightedValue;
      })
      .join(', ');
  }
}
