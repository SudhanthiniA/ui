import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsheeranidhiregisterComponent } from './viewsheeranidhiregister.component';

describe('ViewsheeranidhiregisterComponent', () => {
  let component: ViewsheeranidhiregisterComponent;
  let fixture: ComponentFixture<ViewsheeranidhiregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsheeranidhiregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsheeranidhiregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
