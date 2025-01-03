import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindenttradersexportComponent } from './viewindenttradersexport.component';

describe('ViewindenttradersexportComponent', () => {
  let component: ViewindenttradersexportComponent;
  let fixture: ComponentFixture<ViewindenttradersexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindenttradersexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindenttradersexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
