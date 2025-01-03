import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewid14aComponent } from './viewid14a.component';

describe('Viewid14aComponent', () => {
  let component: Viewid14aComponent;
  let fixture: ComponentFixture<Viewid14aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewid14aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewid14aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
