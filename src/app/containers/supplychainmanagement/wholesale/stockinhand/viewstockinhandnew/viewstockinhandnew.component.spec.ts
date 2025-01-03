import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinhandnewComponent } from './viewstockinhandnew.component';

describe('ViewstockinhandnewComponent', () => {
  let component: ViewstockinhandnewComponent;
  let fixture: ComponentFixture<ViewstockinhandnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinhandnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinhandnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
