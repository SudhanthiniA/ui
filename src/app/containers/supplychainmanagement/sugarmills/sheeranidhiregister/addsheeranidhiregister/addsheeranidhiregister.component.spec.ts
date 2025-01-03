import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsheeranidhiregisterComponent } from './addsheeranidhiregister.component';

describe('AddsheeranidhiregisterComponent', () => {
  let component: AddsheeranidhiregisterComponent;
  let fixture: ComponentFixture<AddsheeranidhiregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsheeranidhiregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsheeranidhiregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
