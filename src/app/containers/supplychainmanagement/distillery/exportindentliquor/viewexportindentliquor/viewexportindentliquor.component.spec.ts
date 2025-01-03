import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexportindentliquorComponent } from './viewexportindentliquor.component';

describe('ViewexportindentliquorComponent', () => {
  let component: ViewexportindentliquorComponent;
  let fixture: ComponentFixture<ViewexportindentliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexportindentliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexportindentliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
