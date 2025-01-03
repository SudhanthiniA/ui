import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderpickupparentComponent } from './vieworderpickupparent.component';

describe('VieworderpickupparentComponent', () => {
  let component: VieworderpickupparentComponent;
  let fixture: ComponentFixture<VieworderpickupparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderpickupparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderpickupparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
