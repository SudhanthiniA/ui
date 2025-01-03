import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationfortransferComponent } from './viewapplicationfortransfer.component';

describe('ViewapplicationfortransferComponent', () => {
  let component: ViewapplicationfortransferComponent;
  let fixture: ComponentFixture<ViewapplicationfortransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapplicationfortransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapplicationfortransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
