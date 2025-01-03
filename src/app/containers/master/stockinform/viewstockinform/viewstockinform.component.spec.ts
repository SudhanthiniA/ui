import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinformComponent } from './viewstockinform.component';

describe('ViewstockinformComponent', () => {
  let component: ViewstockinformComponent;
  let fixture: ComponentFixture<ViewstockinformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
