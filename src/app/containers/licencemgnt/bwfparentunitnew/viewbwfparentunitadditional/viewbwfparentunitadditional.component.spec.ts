import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbwfparentunitadditionalComponent } from './viewbwfparentunitadditional.component';

describe('ViewbwfparentunitadditionalComponent', () => {
  let component: ViewbwfparentunitadditionalComponent;
  let fixture: ComponentFixture<ViewbwfparentunitadditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbwfparentunitadditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbwfparentunitadditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
