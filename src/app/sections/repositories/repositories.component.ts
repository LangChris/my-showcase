import { Component } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
  repo = {
    name: 'My-Showcase',
    description: 'A showcase of my projects and skills',
    url: 'https://github.com/LangChris/my-showcase'
  };

}
