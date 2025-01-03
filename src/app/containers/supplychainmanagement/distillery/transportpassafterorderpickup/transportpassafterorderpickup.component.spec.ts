import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassafterorderpickupComponent } from './transportpassafterorderpickup.component';

describe('TransportpassafterorderpickupComponent', () => {
  let component: TransportpassafterorderpickupComponent;
  let fixture: ComponentFixture<TransportpassafterorderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassafterorderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassafterorderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
