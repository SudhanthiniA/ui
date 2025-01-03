import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinhandComponent } from './viewstockinhand.component';

describe('ViewstockinhandComponent', () => {
  let component: ViewstockinhandComponent;
  let fixture: ComponentFixture<ViewstockinhandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinhandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
