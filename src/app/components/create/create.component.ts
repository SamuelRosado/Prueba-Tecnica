import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',

})
export class CreateComponent implements OnInit {

  public createForm: FormGroup

  constructor(
    public clientesService: ClientesService,
    public formBuilder: FormBuilder,
    public router: Router,
  ){


      this.createForm = this.formBuilder.group({

        name: [''],
        lastname: [''],
        email: [''],
        phone: [''],
        country: [''],
        city: [''],
        address: ['']

      });
    }
  ngOnInit(): void {

  }

    onSubmit(){

      this.clientesService.createClients(this.createForm.value)
      this.router.navigate([''])
    }
}
