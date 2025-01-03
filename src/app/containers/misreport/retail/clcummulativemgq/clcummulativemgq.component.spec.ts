import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcummulativemgqComponent } from './clcummulativemgq.component';

describe('ClcummulativemgqComponent', () => {
  let component: ClcummulativemgqComponent;
  let fixture: ComponentFixture<ClcummulativemgqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClcummulativemgqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClcummulativemgqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
