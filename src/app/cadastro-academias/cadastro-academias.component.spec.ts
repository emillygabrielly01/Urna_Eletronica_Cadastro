import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcademiasComponent } from './cadastro-academias.component';

describe('CadastroAcademiasComponent', () => {
  let component: CadastroAcademiasComponent;
  let fixture: ComponentFixture<CadastroAcademiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAcademiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAcademiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
