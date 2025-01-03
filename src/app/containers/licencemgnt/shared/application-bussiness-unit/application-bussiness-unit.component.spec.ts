import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationBussinessUnitComponent } from './application-bussiness-unit.component';

describe('ApplicationBussinessUnitComponent', () => {
  let component: ApplicationBussinessUnitComponent;
  let fixture: ComponentFixture<ApplicationBussinessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationBussinessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationBussinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
