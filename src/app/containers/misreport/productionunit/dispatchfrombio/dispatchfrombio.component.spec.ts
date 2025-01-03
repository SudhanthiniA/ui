import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchfrombioComponent } from './dispatchfrombio.component';

describe('DispatchfrombioComponent', () => {
  let component: DispatchfrombioComponent;
  let fixture: ComponentFixture<DispatchfrombioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchfrombioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchfrombioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
