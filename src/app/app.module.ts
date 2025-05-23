import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './sections/experience/experience.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { BestPracticesComponent } from './sections/best-practices/best-practices.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { MilestonesComponent } from './sections/milestones/milestones.component';
import { TechnologiesComponent } from './sections/technologies/technologies.component';
import { CodeSnippetsComponent } from './sections/code-snippets/code-snippets.component';

@NgModule({ declarations: [
        AppComponent,
        ShowcaseComponent,
        CodeSnippetComponent,
        CarouselComponent,
        ExperienceComponent,
        CertificationsComponent,
        BestPracticesComponent,
        ClientsComponent,
        MilestonesComponent,
        TechnologiesComponent,
        CodeSnippetsComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
    ], 
    providers: [] 
})
export class AppModule { }
