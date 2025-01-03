import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandandlabelComponent } from './viewbrandandlabel.component';

describe('ViewbrandandlabelComponent', () => {
  let component: ViewbrandandlabelComponent;
  let fixture: ComponentFixture<ViewbrandandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
