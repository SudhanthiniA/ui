import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverconfigpageComponent } from './rolloverconfigpage.component';

describe('RolloverconfigpageComponent', () => {
  let component: RolloverconfigpageComponent;
  let fixture: ComponentFixture<RolloverconfigpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverconfigpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverconfigpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
