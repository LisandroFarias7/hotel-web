import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{


    clients: Payment[] =  []


    constructor(
      private clientService: ClientService
    ) {}

    ngOnInit(): void {
      this.getClients()
    }


    getClients() {
      this.clientService.getClients().subscribe(
        res => {
          console.log(res)
          this.clients = res
        },
        err => {
          console.log(err);
          
        }
      )
    }
}
