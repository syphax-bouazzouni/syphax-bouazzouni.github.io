import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeBtnComponent } from './hire-me-btn.component';

describe('HireMeBtnComponent', () => {
  let component: HireMeBtnComponent;
  let fixture: ComponentFixture<HireMeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMeBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
