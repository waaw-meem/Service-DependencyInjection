import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[DataService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private dataService:DataService,private accountServices:AccountServiceService){
    this.accountServices.statusUpdated.subscribe((status:string) => {
      alert('New Alert ' + status)
    })
  }

  onSetTo(status: string) {
  // this.statusChanged.emit({id: this.id, newStatus: status});
  this.accountServices.onStatusChanged(this.id,status)
  // this.dataService.loginStatusChange(status)

  this.accountServices.statusUpdated.emit(status)

}
}
