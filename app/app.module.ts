import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { EventsComponent } from './components/events.component';
import { SlideMenuComponent } from './components/slide-menu.component';
import { EventDetailComponent } from './components/event-detail.component';
import { AddEventComponent } from './components/add-event.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      redirectTo: 'home',
                      pathMatch: 'full'
                    },
                    {
                      path: 'home',
                      component: HomeComponent
                    },
                    {
                      path: 'events',
                      component: EventsComponent
                    },
                    {
                      path: 'events/:slug',
                      component: EventDetailComponent
                    },
                    {
                      path: 'add-event',
                      component: AddEventComponent
                    }
                  ]) ],
  declarations: [ AppComponent,
                  HomeComponent,
                  EventsComponent,
                  EventDetailComponent,
                  AddEventComponent,
                  SlideMenuComponent,],
  bootstrap:    [ AppComponent,
                  SlideMenuComponent]
})
export class AppModule { }
