import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../cliente.model';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{

  clients: Cliente[];

  constructor(private clientesService: ClientesService){}



  ngOnInit(): void {

    this.clientesService.getClients().subscribe( (resp) =>{

      this.clients = resp.map((e) =>{

        return {
          id: e.payload.doc.id,
        ...(e.payload.doc.data() as Cliente)
        }
      });

    });
  }

  deleteClient(client){

    this.clientesService.deleteClient(client)
  }

}



