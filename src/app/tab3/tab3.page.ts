import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor() { }

  despesas = [0, 0, 0, 0];
  rendaMensal = 0;
  totalDespesas = 0;
  alertButtons = ["OK"];
  reduzirGasto = "";




  selecionarRenda(ev: RangeCustomEvent) {
    this.rendaMensal = Number(ev.detail.value.toString());


    this.totalGastos();
  }


  totalGastos() {
    this.totalDespesas = 0;
    for (let i = 0; i < this.despesas.length; i++) {
      this.totalDespesas += this.despesas[i];
    }

    if (this.totalDespesas > this.rendaMensal) {
      const botaoAlert = document.getElementById('abrirAlertGastos');
      if (botaoAlert) {
        botaoAlert.click();
      }

      const categorias = ['Moradia', 'Alimentação', 'Transporte', 'Lazer'];

      let indiceComValorMaior = 0;
      for (let i = 1; i < this.despesas.length; i++){
        if(this.despesas[i]  > this.despesas[indiceComValorMaior]){
          indiceComValorMaior = i;
        }
      }
      this.reduzirGasto = categorias[indiceComValorMaior];
    }

  }


}
