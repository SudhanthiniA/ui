import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalshoprevenuereportComponent } from './modalshoprevenuereport.component';

describe('ModalshoprevenuereportComponent', () => {
  let component: ModalshoprevenuereportComponent;
  let fixture: ComponentFixture<ModalshoprevenuereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalshoprevenuereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalshoprevenuereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
