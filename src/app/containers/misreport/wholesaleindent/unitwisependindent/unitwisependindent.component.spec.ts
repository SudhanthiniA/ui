import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitwisependindentComponent } from './unitwisependindent.component';

describe('UnitwisependindentComponent', () => {
  let component: UnitwisependindentComponent;
  let fixture: ComponentFixture<UnitwisependindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitwisependindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitwisependindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
