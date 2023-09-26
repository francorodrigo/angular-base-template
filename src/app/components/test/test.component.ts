import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  textToShow = 'Hello word';

  products = [
    {
      title: 'Producto 1',
      description: 'Descripción de prueba del producto 1',
    },
    {
      title: 'Producto 2',
    },
    {
      title: 'Producto 3',
      description: 'Descripción de prueba del producto 3',
    }
  ];

  setTextToShow = () => {
    this.textToShow = 'REEMPLAZO VALOR';
  };
}
