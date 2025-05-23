import { Component } from '@angular/core';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.scss'
})
export class MilestonesComponent {
milestones = [
    { year: 2012, title: 'Studied Computer Science at Radford', side: 'left' },
    { year: 2017, title: 'TaxToken Startup: Lead Software Engineer', side: 'right' },
    { year: 2018, title: 'Sold TaxToken', side: 'right' },
    { year: 2019, title: 'Joined Octo Consulting', side: 'left' },
    { year: 2021, title: 'Contract Proposal Awarded $60M', side: 'left' },
    { year: 2024, title: 'Acquired by IBM', side: 'right' }
  ];
}
