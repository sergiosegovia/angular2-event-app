import { Component } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'add-event',
  templateUrl: 'app/views/add-event.html',
  providers: [ EventsService ]
})

export class AddEventComponent {
  public event : Event;
  public events : Event[];
  public error : string;

  constructor(private _eventsService : EventsService){}

  ngOnInit(){
    console.log('Add Event Component Loaded');
  }

  // addEvent(
  //   name : string,
  //   city : string,
  //   address : string,
  //   date : string,
  //   description : string,
  //   img : string,
  // ) : void {
  //   let event = new Event(name, city, address, date, description, img);
  //   this._eventsService.addEvent(this.event).then((event : Event) => {
  //                        this.events.push(event);
  //                      });
  // }

}
