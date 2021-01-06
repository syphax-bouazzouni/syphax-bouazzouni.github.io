import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeStudiesComponent } from './about-me-studies.component';

describe('AboutMeStudiesComponent', () => {
  let component: AboutMeStudiesComponent;
  let fixture: ComponentFixture<AboutMeStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
