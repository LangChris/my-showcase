import { Component } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
  repositories = ['MyBudgetLab', 'ProxyPeek Chrome Extension', 'SuperHeroMod for CS:CZ'];

}
