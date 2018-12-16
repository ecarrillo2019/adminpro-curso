import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styles: []
})
export class ProgresoComponent implements OnInit {

  progreso: number = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiaValor( valor ) {
    this.progreso = this.progreso + valor;
  }

}
