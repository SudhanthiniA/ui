import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewslaComponent } from './viewsla.component';

describe('ViewslaComponent', () => {
  let component: ViewslaComponent;
  let fixture: ComponentFixture<ViewslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
