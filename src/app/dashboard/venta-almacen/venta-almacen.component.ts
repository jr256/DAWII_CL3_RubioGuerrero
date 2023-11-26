import { Component } from '@angular/core';

@Component({
  selector: 'app-venta-almacen',
  templateUrl: './venta-almacen.component.html',
  styleUrls: ['./venta-almacen.component.css']
})
export class VentaAlmacenComponent {

  precioUnitario: number = 0;
  cantidad: number = 0;
  montoPago: number | null = null;

  calcularPrecio(): void {
    const totalArticulos = this.cantidad;

    if (totalArticulos > 20) {
      this.montoPago = this.precioUnitario * totalArticulos * 0.9; // Descuento del 10%
    } else if (totalArticulos > 10) {
      this.montoPago = this.precioUnitario * totalArticulos * 0.95; // Descuento del 5%
    } else {
      this.montoPago = this.precioUnitario * totalArticulos; // Sin descuento
    }
  }

}
