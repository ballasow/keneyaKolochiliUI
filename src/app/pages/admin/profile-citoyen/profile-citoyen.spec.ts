import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCitoyen } from './profile-citoyen';

describe('ProfileCitoyen', () => {
  let component: ProfileCitoyen;
  let fixture: ComponentFixture<ProfileCitoyen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCitoyen],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCitoyen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
