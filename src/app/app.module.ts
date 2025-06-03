import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CodeSnippetComponent } from './shared/components/code-snippet/code-snippet.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './sections/experience/experience.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { BestPracticesComponent } from './sections/best-practices/best-practices.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { MilestonesComponent } from './sections/milestones/milestones.component';
import { TechnologiesComponent } from './sections/technologies/technologies.component';
import { CodeSnippetsComponent } from './sections/code-snippets/code-snippets.component';
import { RepositoriesComponent } from './sections/repositories/repositories.component';

@NgModule({ declarations: [
        AppComponent,
        CodeSnippetComponent,
        CarouselComponent,
        ExperienceComponent,
        CertificationsComponent,
        BestPracticesComponent,
        ClientsComponent,
        MilestonesComponent,
        TechnologiesComponent,
        CodeSnippetsComponent,
        RepositoriesComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [
        FormsModule,
        BrowserModule,
    ], 
    providers: [] 
})
export class AppModule { }
