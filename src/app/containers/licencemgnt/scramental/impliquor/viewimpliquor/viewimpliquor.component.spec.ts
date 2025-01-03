import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimpliquorComponent } from './viewimpliquor.component';

describe('ViewimpliquorComponent', () => {
  let component: ViewimpliquorComponent;
  let fixture: ComponentFixture<ViewimpliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimpliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimpliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
