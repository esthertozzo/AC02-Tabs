import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  valorEmprestimo = 0;
  porcentagemJurosAnual = 0;
  NumMeses = 0;
  valorParcela = "";
  alertButtons = ["OK"];



  selecionarJuros(ev: RangeCustomEvent) {
    this.porcentagemJurosAnual = Number(ev.detail.value.toString());

    if(this.porcentagemJurosAnual > 20){
      const botaoAlert = document.getElementById('abrirAlertJuros');
      if(botaoAlert){
        botaoAlert.click();
      }
    }
    this.totalEmprestimo();
  }

  totalEmprestimo() {
    const valorPorcentJuros = (this.porcentagemJurosAnual / 12) / 100;

    this.valorParcela = ((this.valorEmprestimo * valorPorcentJuros) / (1 - (1 + valorPorcentJuros) ** -this.NumMeses)).toFixed(2);
  }

}
