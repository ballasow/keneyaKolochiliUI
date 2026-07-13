import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarCitoyen } from './dashboar-citoyen';

describe('DashboarCitoyen', () => {
  let component: DashboarCitoyen;
  let fixture: ComponentFixture<DashboarCitoyen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarCitoyen],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboarCitoyen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
