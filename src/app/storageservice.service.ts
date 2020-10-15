import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {

  constructor() { }

  private storageSub = new Subject<String>();

  watchStorage(): Observable<any>{
    return this.storageSub.asObservable();
  }

  setItem(key:string,data:any){
    localStorage.setItem(key, data);
    this.storageSub.next('set');
  }

  removeItem(key){
    localStorage.removeItem(key);
    this.storageSub.next('removed');
  }
}
