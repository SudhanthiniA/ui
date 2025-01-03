import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankcategoryComponent } from './viewtankcategory.component';

describe('ViewtankcategoryComponent', () => {
  let component: ViewtankcategoryComponent;
  let fixture: ComponentFixture<ViewtankcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
