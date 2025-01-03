import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgatepassfrombreweryComponent } from './addgatepassfrombrewery.component';

describe('AddgatepassfrombreweryComponent', () => {
  let component: AddgatepassfrombreweryComponent;
  let fixture: ComponentFixture<AddgatepassfrombreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgatepassfrombreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatepassfrombreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
