/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from '@faker-js/faker';
import { PlantaListComponent } from './planta-list.component';
import { Planta } from '../planta';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantaListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    let planta1 = new Planta(faker.datatype.number(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(),
      faker.lorem.sentence(), faker.lorem.sentence());
    let planta2 = new Planta(faker.datatype.number(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(),
      faker.lorem.sentence(), faker.lorem.sentence());
    let planta3 = new Planta(faker.datatype.number(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(),
      faker.lorem.sentence(), faker.lorem.sentence());
    component.plantas = [planta1, planta2, planta3];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba lista de plantas', () => {
    let tableRows = debug.query(By.css('tbody')).nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);
  });
});
