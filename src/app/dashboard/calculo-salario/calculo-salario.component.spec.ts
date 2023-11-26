import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoSalarioComponent } from './calculo-salario.component';

describe('CalculoSalarioComponent', () => {
  let component: CalculoSalarioComponent;
  let fixture: ComponentFixture<CalculoSalarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculoSalarioComponent]
    });
    fixture = TestBed.createComponent(CalculoSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
