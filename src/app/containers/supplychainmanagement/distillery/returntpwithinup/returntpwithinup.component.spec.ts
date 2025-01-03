import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturntpwithinupComponent } from './returntpwithinup.component';

describe('ReturntpwithinupComponent', () => {
  let component: ReturntpwithinupComponent;
  let fixture: ComponentFixture<ReturntpwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturntpwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturntpwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
