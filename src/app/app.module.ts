import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './sections/experience/experience.component';

@NgModule({ declarations: [
        AppComponent,
        ShowcaseComponent,
        CodeSnippetComponent,
        CarouselComponent,
        ExperienceComponent,
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
