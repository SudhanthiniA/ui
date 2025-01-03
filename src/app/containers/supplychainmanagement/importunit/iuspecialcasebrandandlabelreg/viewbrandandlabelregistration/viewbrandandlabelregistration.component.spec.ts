import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandandlabelregistrationComponent } from './viewbrandandlabelregistration.component';

describe('ViewbrandandlabelregistrationComponent', () => {
  let component: ViewbrandandlabelregistrationComponent;
  let fixture: ComponentFixture<ViewbrandandlabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandandlabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandandlabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
