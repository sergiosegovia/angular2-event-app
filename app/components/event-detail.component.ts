import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Event } from '../models/event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'event-detail',
  templateUrl: 'app/views/event-detail.html',
  styleUrls: [ 'assets/css/event-detail.css' ],
  providers: [ EventsService ]
})

export class EventDetailComponent implements OnInit {
    public event : Event;
    public error : string;
    public like : boolean;
    public eventLikes : number;

    constructor(
      private _eventsService: EventsService,
      private route: ActivatedRoute,
      private location: Location
    ) {
      this.like = false;
    }

    ngOnInit(): void {
      this.route.params
        .switchMap((params : Params) => this._eventsService.getEvent(params['slug']))
        .subscribe(event => this.event = event);
    }
}
