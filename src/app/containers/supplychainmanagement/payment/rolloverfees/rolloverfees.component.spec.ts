import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverfeesComponent } from './rolloverfees.component';

describe('RolloverfeesComponent', () => {
  let component: RolloverfeesComponent;
  let fixture: ComponentFixture<RolloverfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
