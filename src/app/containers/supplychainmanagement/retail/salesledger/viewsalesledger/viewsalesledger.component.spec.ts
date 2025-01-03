import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalesledgerComponent } from './viewsalesledger.component';

describe('ViewsalesledgerComponent', () => {
  let component: ViewsalesledgerComponent;
  let fixture: ComponentFixture<ViewsalesledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsalesledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalesledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
