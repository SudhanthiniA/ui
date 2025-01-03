import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheeranidhiComponent } from './sheeranidhi.component';

describe('SheeranidhiComponent', () => {
  let component: SheeranidhiComponent;
  let fixture: ComponentFixture<SheeranidhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheeranidhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheeranidhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
