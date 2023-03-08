import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { GalleryComponent } from './pages/home/gallery/gallery.component';
import { ContactComponent } from './pages/home/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ProjectsComponent,
        ServicesComponent,
        GalleryComponent,
        ContactComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
