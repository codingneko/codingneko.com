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
import { FooterComponent } from './components/footer/footer.component';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { SocialMediaComponent } from './pages/home/social-media/social-media.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ProjectsComponent,
        ServicesComponent,
        GalleryComponent,
        FooterComponent,
        SocialMediaComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        PaginatorModule,
        TooltipModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
