import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService} from '../shared/heroe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh: string="";
  indice: number=0;
  miheroe: Heroe={
      nombre:"",
      bio:"",
      img:"",
      aparicion:"",
      casa:""
  };

  constructor( private heroeService: HeroeService, private activatedRoute: ActivatedRoute){
      this.activatedRoute.params.subscribe( params =>{
          this.nombreh = params['nombreh'];
          this.indice = this.heroeService.searchUnHeroe(this.nombreh);
          console.log(this.indice);
          

          if(this.indice != -1){
              this.miheroe = this.heroeService.getUnHeroe(this.indice);
          }else{
            Swal.fire({
              title: 'No se encontro un Heroe llamado: '+this.nombreh,
              html: 'Te llevaremos a la pagina principal',
              imageUrl: 'assets/img/NoEncontro.gif',
              timer: 3000,
              timerProgressBar: true,
              backdrop: `
                rgba(198, 51, 11,0.5)
                url("assets/img/spiderduda.gif")
                left top
                no-repeat
              `,
              didOpen: () => {
                Swal.showLoading();
                setInterval(() => {
                Swal.getTimerLeft();
                }, 100)
              },
              
            })
           
            setTimeout( function() {  window.location.href = "/heroes"; }, 3000 )
          }


      });
  }

  ngOnInit(): void {
  }

}

