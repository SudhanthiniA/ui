import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderpickupComponent } from './vieworderpickup.component';

describe('VieworderpickupComponent', () => {
  let component: VieworderpickupComponent;
  let fixture: ComponentFixture<VieworderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
