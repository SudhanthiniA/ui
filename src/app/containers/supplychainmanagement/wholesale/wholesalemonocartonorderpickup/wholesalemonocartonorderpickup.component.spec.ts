import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalemonocartonorderpickupComponent } from './wholesalemonocartonorderpickup.component';

describe('WholesalemonocartonorderpickupComponent', () => {
  let component: WholesalemonocartonorderpickupComponent;
  let fixture: ComponentFixture<WholesalemonocartonorderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalemonocartonorderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalemonocartonorderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
