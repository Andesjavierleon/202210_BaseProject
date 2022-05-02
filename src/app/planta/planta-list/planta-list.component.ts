import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalPlantasInterior: number = 0;
  totalPlantasExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      for (let planta in plantas) {
        if (plantas[planta].tipo == 'Exterior') {
          this.totalPlantasExterior += 1;
        } else if (plantas[planta].tipo == 'Interior') {
          this.totalPlantasInterior += 1;
        }
      }
    });
  }

  ngOnInit(): void {
    this.getPlantas();
  }
}
