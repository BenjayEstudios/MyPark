import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagosCobrosPage } from './pagos-cobros.page';

describe('PagosCobrosPage', () => {
  let component: PagosCobrosPage;
  let fixture: ComponentFixture<PagosCobrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosCobrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
