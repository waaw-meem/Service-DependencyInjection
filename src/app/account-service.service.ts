import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private dataService:DataService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>()

  onAccountAdded(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.dataService.loginStatusChange(status)

  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.dataService.loginStatusChange(newStatus)

  }

}
