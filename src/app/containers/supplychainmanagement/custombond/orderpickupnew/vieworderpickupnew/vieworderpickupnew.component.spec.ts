import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderpickupnewComponent } from './vieworderpickupnew.component';

describe('VieworderpickupnewComponent', () => {
  let component: VieworderpickupnewComponent;
  let fixture: ComponentFixture<VieworderpickupnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderpickupnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderpickupnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
