import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

const routes: Routes = [
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  {path: 'portfolio', component: ShowcaseComponent, title: 'My Portfolio' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
