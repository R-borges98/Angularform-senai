import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCliente !: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      dataNascimento: new FormControl(cliente.dataNascimento),

    
    })

  }
  onSubmit() {
    console.log(this.formCliente.value);
  }

}
