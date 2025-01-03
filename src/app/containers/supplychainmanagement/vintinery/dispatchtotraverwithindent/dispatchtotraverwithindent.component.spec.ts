import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchtotraverwithindentComponent } from './dispatchtotraverwithindent.component';

describe('DispatchtotraverwithindentComponent', () => {
  let component: DispatchtotraverwithindentComponent;
  let fixture: ComponentFixture<DispatchtotraverwithindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchtotraverwithindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchtotraverwithindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
