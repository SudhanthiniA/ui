import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndenttradersexportComponent } from './indenttradersexport.component';

describe('IndenttradersexportComponent', () => {
  let component: IndenttradersexportComponent;
  let fixture: ComponentFixture<IndenttradersexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndenttradersexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndenttradersexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
