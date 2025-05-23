
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  contactName = 'Chris Lang';
  subtitle = 'Full Stack Engineer';
  location = 'Fairfax, VA';
  contactPhone = '1+ 703 • 887 • 9385'
  contactEmail = 'christopherjlang01@gmail.com';
  website = 'www.langdevelopments.com';
  githubHandle = 'LangChris';

  projects = ['MyBudgetLab', 'ProxyPeek Chrome Extension', 'SuperHeroMod for CS:CZ'];

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
