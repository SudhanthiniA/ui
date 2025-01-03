import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewretailmstistComponent } from './viewretailmstist.component';

describe('ViewretailmstistComponent', () => {
  let component: ViewretailmstistComponent;
  let fixture: ComponentFixture<ViewretailmstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewretailmstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewretailmstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
