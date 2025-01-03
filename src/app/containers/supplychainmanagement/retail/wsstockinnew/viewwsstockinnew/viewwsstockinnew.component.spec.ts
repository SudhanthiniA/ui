import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwsstockinnewComponent } from './viewwsstockinnew.component';

describe('ViewwsstockinnewComponent', () => {
  let component: ViewwsstockinnewComponent;
  let fixture: ComponentFixture<ViewwsstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwsstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwsstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
