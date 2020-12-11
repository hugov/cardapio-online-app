import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos : any[] = [{
    id: 1,
    categoriaId : 1,
    descricao: 'Água 300ml'
  },
  {
    id: 2,
    categoriaId : 1,
    descricao: 'Água 1L'
  },
  {
    id: 3,
    categoriaId : 1,
    descricao: 'Água 5L'
  },
  {
    id: 100,
    categoriaId : 2,
    descricao: 'TV 46°'
  },
  {
    id: 101,
    categoriaId : 2,
    descricao: 'TV 55°'
  },
  {
    id: 102,
    categoriaId : 2,
    descricao: 'Batedeira 110v'
  },
  {
    id: 200,
    categoriaId : 3,
    descricao: 'Picanha 1 Kg'
  },
  {
    id: 201,
    categoriaId : 3,
    descricao: 'Linguiça Calabresa 1 Kg'
  },
  {
    id: 202,
    categoriaId : 3,
    descricao: 'Maminha Kg'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
