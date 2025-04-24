import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente2Component } from './meu-componente-2.component';

describe('MeuComponente2Component', () => {
  let component: MeuComponente2Component;
  let fixture: ComponentFixture<MeuComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
