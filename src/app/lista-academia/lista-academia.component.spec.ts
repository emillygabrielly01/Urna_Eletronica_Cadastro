import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcademiaComponent } from './lista-academia.component';

describe('ListaAcademiaComponent', () => {
  let component: ListaAcademiaComponent;
  let fixture: ComponentFixture<ListaAcademiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAcademiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
