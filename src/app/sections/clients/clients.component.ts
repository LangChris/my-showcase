import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
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
  activeClientIndex: number = this.clients.length - 1;

  toggleClient(index: number): void {
    this.activeClientIndex = index;
  }
}
