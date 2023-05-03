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

}
