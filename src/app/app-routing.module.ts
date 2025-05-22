import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

const routes: Routes = [
  {path: '', redirectTo: 'showcase', pathMatch: 'full'},
  {path: 'showcase', component: ShowcaseComponent, title: 'My Showcase' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
