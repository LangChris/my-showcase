import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-showcase';
  contactName = 'Chris Lang';
  subtitle = 'Full Stack Engineer';
  location = 'Fairfax, VA';
  contactPhone = '1+ 703 • 887 • 9385'
  contactEmail = 'christopherjlang01@gmail.com';
  website = 'www.langdevelopments.com';
  githubHandle = 'LangChris';

  screenshots = [
    'images/screenshot1.png',
    'images/screenshot2.png',
    'images/screenshot3.png',
    'images/screenshot4.png',
  ];

  scrollTo(sectionId: 'top' | 'mid' | 'bottom'): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}