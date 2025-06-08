import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {}

  valorInvestido = 0;
  NumCapitalizao = 0;
  NumTempo = 0;
  porcentagemJurosAnual = 0;
  valorFinal = "";
  alertButtons = ["OK"];
  mensagem = "";
  abirirAlert = false;



  selecionarJuros(ev: RangeCustomEvent) {
    this.porcentagemJurosAnual = Number(ev.detail.value.toString());

    if(this.porcentagemJurosAnual > 15){
      this.mensagem = 'Essa taxa de retorno é maior que 15%. O investimento pode ser perigoso! Tome cuidado';
      this.abirirAlert = true;
    }
    
    this.totalInvestimento();
  }


  totalInvestimento() {
    const valorPorcentJuros = (this.porcentagemJurosAnual) / 100;

    this.valorFinal = (this.valorInvestido * (1 + (valorPorcentJuros/this.NumCapitalizao)) ** (this.NumCapitalizao*this.NumTempo)).toFixed(2);

    // this.valorParcela = ((this.valorEmprestimo * valorPorcentJuros) / (1 - (1 + valorPorcentJuros) ** -this.NumMeses)).toFixed(2);
  }


}
