import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [CardapioComponent, ProdutoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardapioComponent
  ]
})
export class CardapioModule { }
