import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { User } from 'src/app/models/user';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private formBuilder: FormBuilder) { }

  listaProdutos = [] as Produtos []

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.produtosService.getProdutos().subscribe( (produtosRecebidos: Produtos[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos);
    })
  }
 }

  ngOnInit(); void {
    this: onsubmit,
  }
  const userModel= new User ("","")
    onsubmit;{ 
      console.log(this,userModel)
  }
  
function ngOnInit() {
  throw new Error('Function not implemented.');
}


 