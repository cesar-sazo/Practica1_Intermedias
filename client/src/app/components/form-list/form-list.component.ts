import { Component, OnInit, HostBinding } from '@angular/core';
import {usuario} from '../../models/usuario';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})




export class FormListComponent implements OnInit {

 @HostBinding('class') classes = 'row';
 usuarioP: usuario ={
  nombre : '',
  password : '',
  email : '',
 };



  constructor() { 
    
  }
 
 
  usuario: any = [];

  ngOnInit(): void {
    //Object with properties
  //Object with properties
  let usuario1: usuario = {
    nombre : 'USR1',
    password : 'contrasena1',
    email : 'correo1@gmail.com'
  };
  let usuario2: usuario = {
    nombre : 'USR2',
    password : 'contrasena2',
    email : 'correo2@gmail.com'
  };
  let usuario3: usuario = {
    nombre : 'USR3',
    password :'contrasena3',
    email : 'correo3@gmail.com'
  };
  let usuario4: usuario = {
    nombre : 'USR4',
    password : 'contrasena4',
    email : 'correo4@gmail.com'
  };

    this.usuario.push(usuario1);
    this.usuario.push(usuario2);
    this.usuario.push(usuario3);
    this.usuario.push(usuario4);
    console.log(this.usuario);
  }

  saveuser(){
    
   let  usuario22: usuario ={
      nombre : this.usuarioP.nombre,
      password : this.usuarioP.password,
      email : this.usuarioP.email,
     };
    
    this.usuario.push(usuario22);
  }


}
