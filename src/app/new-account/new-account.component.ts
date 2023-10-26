import { Component, } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Good Practice to communicate with service you create
  // providers:[DataService]

})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // Good Practice to communicate with service you create
  constructor(private dataService:DataService,private accountServices:AccountServiceService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServices.onAccountAdded(accountName,accountStatus)
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    const service = new DataService()

    // Bad Practice to communicate with service you create
    // service.loginStatusChange(accountStatus)

    // Good Practice to communicate with service you create
    // this.dataService.loginStatusChange(accountStatus)

    this.accountServices.statusUpdated.emit(accountStatus)

  }
}
