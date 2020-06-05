import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateMotorsComponent } from './gate-motors.component';

describe('GateMotorsComponent', () => {
  let component: GateMotorsComponent;
  let fixture: ComponentFixture<GateMotorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateMotorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
