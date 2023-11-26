import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VentaAlmacenComponent } from './dashboard/venta-almacen/venta-almacen.component';
import { CalculoSalarioComponent } from './dashboard/calculo-salario/calculo-salario.component';
import { ConsumoApiComponent } from './dashboard/consumo-api/consumo-api.component';
import { MaterialModule } from './angular-material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,   
    VentaAlmacenComponent,
    CalculoSalarioComponent,
    ConsumoApiComponent,
    DashboardComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent,
        children: [
          {path: 'venta-almacen', component: VentaAlmacenComponent},
          {path: 'calculo-salario', component: CalculoSalarioComponent},
          {path: 'consumo-api', component: ConsumoApiComponent},
        ]      
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
