import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaAlmacenComponent } from './venta-almacen.component';

describe('VentaAlmacenComponent', () => {
  let component: VentaAlmacenComponent;
  let fixture: ComponentFixture<VentaAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaAlmacenComponent]
    });
    fixture = TestBed.createComponent(VentaAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
