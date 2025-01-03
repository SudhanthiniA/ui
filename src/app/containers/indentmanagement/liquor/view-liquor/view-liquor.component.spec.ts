import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLiquorComponent } from './view-liquor.component';

describe('ViewLiquorComponent', () => {
  let component: ViewLiquorComponent;
  let fixture: ComponentFixture<ViewLiquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLiquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLiquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
