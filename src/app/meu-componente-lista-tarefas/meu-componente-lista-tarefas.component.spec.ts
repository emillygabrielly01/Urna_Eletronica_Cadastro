import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponenteListaTarefasComponent } from './meu-componente-lista-tarefas.component';

describe('MeuComponenteListaTarefasComponent', () => {
  let component: MeuComponenteListaTarefasComponent;
  let fixture: ComponentFixture<MeuComponenteListaTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponenteListaTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponenteListaTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
