import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  
  resultado: string = '';

  constructor() {
    this.tirar();
  }

  ngOnInit() {}

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'Ganaste el usuario es: pwx2j9@k5.com y la Contraseña es: dU5mQf6#z8N';
    } else {
      this.resultado = 'Suerte Ganando la cuenta Premium de HBO Max';
    }
  }
}
