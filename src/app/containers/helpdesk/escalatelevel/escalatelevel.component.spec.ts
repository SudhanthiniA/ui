import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalatelevelComponent } from './escalatelevel.component';

describe('EscalatelevelComponent', () => {
  let component: EscalatelevelComponent;
  let fixture: ComponentFixture<EscalatelevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalatelevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalatelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
