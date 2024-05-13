import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  public editForm: FormGroup
  editRef:any

  constructor(
    public clientesService: ClientesService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public router: Router,
  ){

    this.editForm = this.formBuilder.group({

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
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.clientesService.getClientsById(id).subscribe (resp =>{

      this.editRef = resp
      this.editForm = this.formBuilder.group({

        name: [this.editRef.name],
        lastname: [this.editRef.lastname],
        email: [this.editRef.email],
        phone: [this.editRef.phone],
        country: [this.editRef.country],
        city: [this.editRef.city],
        address: [this.editRef.address],
      })
    })
  }

  onSubmit(){

    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.clientesService.updateClient(this.editForm.value, id)
    this.router.navigate([''])
  }
}
