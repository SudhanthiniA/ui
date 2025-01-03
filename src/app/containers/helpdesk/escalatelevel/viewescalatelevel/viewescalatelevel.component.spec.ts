import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewescalatelevelComponent } from './viewescalatelevel.component';

describe('ViewescalatelevelComponent', () => {
  let component: ViewescalatelevelComponent;
  let fixture: ComponentFixture<ViewescalatelevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewescalatelevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewescalatelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
