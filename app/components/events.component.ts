import { Component } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'events',
  templateUrl: 'app/views/events.html',
  styleUrls: [ 'assets/css/events.css' ],
  providers: [ EventsService ]
})

export class EventsComponent {
  public event : Event;
  public events : Event[];
  public error : string;

  constructor(private _eventsService : EventsService){}

  ngOnInit(){
    this.getEvents();
    console.log('Events Component Loaded');
  }

  getEvents(){
    this._eventsService.getEvents()
                       .subscribe(
                         result => {
                           this.events = result;
                           console.log(this.events);
                         },
                         error => {
                          this.error = error;
                         }
                       );
  }
}
