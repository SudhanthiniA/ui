import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwindentacceptanceComponent } from './viewmwindentacceptance.component';

describe('ViewmwindentacceptanceComponent', () => {
  let component: ViewmwindentacceptanceComponent;
  let fixture: ComponentFixture<ViewmwindentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwindentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwindentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
