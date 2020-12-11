import { Component, OnInit } from '@angular/core';

//https://www.w3schools.com/howto/howto_css_cards.asp

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  categorias : any[] = [{
    id: '1',
    caminhoImagem: 'http://lorempixel.com/200/100',
    descricao: 'Água'
  },
  {
    id: '2',
    caminhoImagem: 'http://lorempixel.com/200/100',
    descricao: 'Eletrodomésticos'
  },
  {
    id: '3',
    caminhoImagem: 'http://lorempixel.com/200/100',
    descricao: 'Açougue'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  categoriaDetail(categoriaId) {
    console.log('Categoria selecionada, ', categoriaId);

    let itensCategoria = this.categorias.find(categoria => categoria.id == categoriaId);
    console.log( itensCategoria );

    return 'app-produto';
  }

}
