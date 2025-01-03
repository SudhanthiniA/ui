import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforredistillationofbottledstockComponent } from './applicationforredistillationofbottledstock.component';

describe('ApplicationforredistillationofbottledstockComponent', () => {
  let component: ApplicationforredistillationofbottledstockComponent;
  let fixture: ComponentFixture<ApplicationforredistillationofbottledstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforredistillationofbottledstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforredistillationofbottledstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
