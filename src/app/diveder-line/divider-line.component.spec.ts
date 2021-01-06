import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerLineComponent } from './divider-line.component';

describe('DivederLineComponent', () => {
  let component: DividerLineComponent;
  let fixture: ComponentFixture<DividerLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
