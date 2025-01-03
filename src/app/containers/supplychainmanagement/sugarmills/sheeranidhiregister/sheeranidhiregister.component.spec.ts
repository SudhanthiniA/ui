import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheeranidhiregisterComponent } from './sheeranidhiregister.component';

describe('SheeranidhiregisterComponent', () => {
  let component: SheeranidhiregisterComponent;
  let fixture: ComponentFixture<SheeranidhiregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheeranidhiregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheeranidhiregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
