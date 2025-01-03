import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregistrationandmapcbComponent } from './viewregistrationandmapcb.component';

describe('ViewregistrationandmapcbComponent', () => {
  let component: ViewregistrationandmapcbComponent;
  let fixture: ComponentFixture<ViewregistrationandmapcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregistrationandmapcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregistrationandmapcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
