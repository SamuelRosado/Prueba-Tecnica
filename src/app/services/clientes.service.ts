import { Injectable } from '@angular/core';


import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { Cliente } from '../cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private angularFirestore: AngularFirestore) { }

  getClients(){

    return this.angularFirestore.collection('Cliente').snapshotChanges()


  }
  getClientsById(id: string){

    return this.angularFirestore.collection('Cliente').doc(id).valueChanges()
  }
  createClients(client: Cliente){

    return new Promise<any>(( resolve, reject) => {

      this.angularFirestore
      .collection('Cliente')
      .add(client)
      .then((response)=>{
        console.log(response)
      },
      (error) =>{
        reject(error)
      })
    })
  }
  updateClient(client: Cliente, id){

    return this.angularFirestore
    .collection('Cliente')
    .doc(id)
    .update( {
      name: client.name,
      lastname: client.lastname,
      email: client.email,
      phone: client.phone,
      country: client.country,
      city: client.city,
      address: client.address
    })
  }
  deleteClient(client: Cliente){

    return this.angularFirestore
    .collection('Cliente')
    .doc(client.id)
    .delete()
  }
}
