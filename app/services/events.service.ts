import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Event } from '../models/event';

@Injectable()
export class EventsService {

  public handleError : any;

  constructor(private _http : Http){}

  getEvents(){
    return this._http.get('https://cultiva-api.herokuapp.com/events/?format=json')
                     .map(res => res.json());
  }

  getEvent(slug : string){
    return this._http.get('https://cultiva-api.herokuapp.com/events/' + slug + '?format=json')
                     .map(res => res.json());
  }

  // addEvent(event : Event): Promise<Event> {
  //   return this._http.post('http://localhost:8000/events/',
  //                           JSON.stringify({event : event}))
  //                           .toPromise()
  //                           .then(res => res.json().data)
  //                           .catch(this.handleError);
  //
  // }
}
