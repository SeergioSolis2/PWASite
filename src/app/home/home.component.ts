import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import swal from'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  Usuarios:any[]=[];
  perfil:any;
  
  constructor() { 
  }

  public registar(Nombre:string,Apellidos:String,Correo:String,Sexo:String,FechaNac:String){
    var usuario= {
      Nombre:Nombre,
      Apellidos:Apellidos,
      Correo:Correo,
      Sexo:Sexo,
      FechaNac:FechaNac
    };

   if(this.Usuarios.length==0 && localStorage.getItem('users')){
    this.perfil = localStorage.getItem('users')
    this.perfil = JSON.parse(this.perfil)
    console.log(this.perfil)
    for(var i=0;i<this.perfil.length;i++){
    this.Usuarios.push(this.perfil[i]);
    }
    console.log(this.Usuarios)
    }
    
    
    var validacion=false;
    for(i=0;i<Correo.length;i++){
      if(Correo[i]=="@"){
        validacion=true;
      }
    } 

  
   if(Nombre!='' && Apellidos!='' && Correo!='' && validacion==true ){
    
    this.Usuarios.push(usuario);
    localStorage.setItem('users', JSON.stringify(this.Usuarios));
    swal.fire('Registro exitoso...', 'Exitosos', 'success');
   }else{
    swal.fire('Registro No exitoso...', 'No Exitosos', 'error');
   }
 
  }

  ngOnInit(): void {
  }

}
