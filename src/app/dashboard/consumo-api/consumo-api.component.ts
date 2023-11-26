import { Component } from '@angular/core';
import { ApiRickService } from './api-rick.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rick } from './rick';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css']
})
export class ConsumoApiComponent {

  personajes: Rick[] = []
  displayedColumns: string[] = ["Id", "Name", "Status", "Species"]


  constructor(private apiRickService : ApiRickService,
    private snackBar: MatSnackBar){

  }

  ngOnInit(): void {
    this.apiRickService.listarPersonaje()
      .subscribe(
        (data: Rick[]) => {
          this.personajes = data;
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', { duration: 5000 });
        }        
      );
  }


}
