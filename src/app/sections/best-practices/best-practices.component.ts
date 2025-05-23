import { Component } from '@angular/core';

@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.component.html',
  styleUrl: './best-practices.component.scss'
})
export class BestPracticesComponent {
practices = [
    {
      label: 'Agile Enthusiast 🚀',
      description: 'I embrace Agile principles, utilizing tools such as Jira, Confluence and Slack to foster collaboration and transparency'
    },
    {
      label: 'Documentation Advocate 📘✍️',
      description: "I'm passionate about clear documentation, ensuring teams can onboard quickly and efficiently is always at the core of everything I do"
    },
  ];
}
