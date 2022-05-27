import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  perfil:any;
  
  constructor() {
    this.perfil = localStorage.getItem('users')
    this.perfil = JSON.parse(this.perfil)
    console.log(this.perfil)
  }

 
    
   
    

  ngOnInit(): void {
  }

}
