import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteRealiseeComponent } from './activite-realisee-component';

describe('ActiviteRealiseeComponent', () => {
  let component: ActiviteRealiseeComponent;
  let fixture: ComponentFixture<ActiviteRealiseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteRealiseeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteRealiseeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
