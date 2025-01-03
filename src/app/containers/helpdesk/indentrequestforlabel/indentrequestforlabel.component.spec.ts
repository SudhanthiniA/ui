import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentrequestforlabelComponent } from './indentrequestforlabel.component';

describe('IndentrequestforlabelComponent', () => {
  let component: IndentrequestforlabelComponent;
  let fixture: ComponentFixture<IndentrequestforlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentrequestforlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentrequestforlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
