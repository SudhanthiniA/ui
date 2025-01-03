import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqrcodewastageComponent } from './viewqrcodewastage.component';

describe('ViewqrcodewastageComponent', () => {
  let component: ViewqrcodewastageComponent;
  let fixture: ComponentFixture<ViewqrcodewastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqrcodewastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqrcodewastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
