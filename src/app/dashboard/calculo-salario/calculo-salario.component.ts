import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculo-salario',
  templateUrl: './calculo-salario.component.html',
  styleUrls: ['./calculo-salario.component.css']
})
export class CalculoSalarioComponent {

  horasTrabajadas: number = 0;
  salarioCalculado: number | null = null;

  calcularSalario(): void {
    if (this.horasTrabajadas <= 40) {
      this.salarioCalculado = this.horasTrabajadas * 16;
    } else {
      this.salarioCalculado = 40 * 16 + (this.horasTrabajadas - 40) * 20;
    }
  }

}
