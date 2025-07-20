import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private reloadPastasSubject = new Subject<void>();
  reloadPastasObservable = this.reloadPastasSubject.asObservable();

  constructor() { }

  triggerReloadPastas(){
    this.reloadPastasSubject.next();
  }
}
