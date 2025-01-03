import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsupplytypeComponent } from './viewsupplytype.component';

describe('ViewsupplytypeComponent', () => {
  let component: ViewsupplytypeComponent;
  let fixture: ComponentFixture<ViewsupplytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsupplytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsupplytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
