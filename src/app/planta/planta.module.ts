import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantaListComponent],
  declarations: [PlantaListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlantaModule { }
