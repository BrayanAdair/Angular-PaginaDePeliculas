import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() datoEntrante:any;
  public image:string;
  constructor(){
    this.image='';
  }
  ngOnInit(): void {
      this.image=''
      console.log('Llamado componente',this.datoEntrante);
  }
  
  clickAlerta(){
    alert("Cuidado estas a punto de entrar a un sitio Pirata y puedes llenarte de virus");
    window.location.href = 'https://www.cuevana.be/';

  }

}
