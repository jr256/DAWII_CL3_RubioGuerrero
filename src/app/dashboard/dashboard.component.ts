import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute, private router: Router){

  }

  onNavigateToVentaPage(): void{
    this.router.navigate(['venta-almacen'], {relativeTo: this.route});
  }

  onNavigateToSalarioPage(): void{
    this.router.navigate(['calculo-salario'], {relativeTo: this.route});
  }

  onNavigateToApiPage(): void{
    this.router.navigate(['consumo-api'], {relativeTo: this.route});
  }


}
