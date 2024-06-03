import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmaciaPage } from './farmacia.page';

describe('FarmaciaPage', () => {
  let component: FarmaciaPage;
  let fixture: ComponentFixture<FarmaciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
