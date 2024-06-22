import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ToursComponent } from './tours/tours.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WlapperComponent } from './wlapper/wlapper.component';
import { SearchComponent } from './search/search.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDatailComponent } from './blog-datail/blog-datail.component';
import { UserComponent } from './user/user.component';
import { UserService } from './models/user.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './models/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: TourDetailComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDatailComponent },
  { path: 'user', component: UserComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ToursComponent,
    ContactComponent,
    GalleryComponent,
    WlapperComponent,
    SearchComponent,
    TourDetailComponent,
    BlogComponent,
    BlogDatailComponent,
    UserComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }