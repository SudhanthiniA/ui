import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshelfsaleComponent } from './viewshelfsale.component';

describe('ViewshelfsaleComponent', () => {
  let component: ViewshelfsaleComponent;
  let fixture: ComponentFixture<ViewshelfsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshelfsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshelfsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
