import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications = [
    { title: 'AWS Certified Developer - Associate', date: '2025-05-23' },
    { title: 'Agile SAFe Certified', date: '2023-10-01' },
  ];
}
