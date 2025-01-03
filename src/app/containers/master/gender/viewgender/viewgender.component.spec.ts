import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgenderComponent } from './viewgender.component';

describe('ViewgenderComponent', () => {
  let component: ViewgenderComponent;
  let fixture: ComponentFixture<ViewgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
