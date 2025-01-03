import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentforblendComponent } from './viewindentforblend.component';

describe('ViewindentforblendComponent', () => {
  let component: ViewindentforblendComponent;
  let fixture: ComponentFixture<ViewindentforblendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentforblendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentforblendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
