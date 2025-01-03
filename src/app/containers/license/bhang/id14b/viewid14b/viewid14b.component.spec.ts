import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewid14bComponent } from './viewid14b.component';

describe('Viewid14bComponent', () => {
  let component: Viewid14bComponent;
  let fixture: ComponentFixture<Viewid14bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewid14bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewid14bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
