import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  loginStatusChange(status:string){
    console.log('A server status changed, new status: ' + status);

  }
}
