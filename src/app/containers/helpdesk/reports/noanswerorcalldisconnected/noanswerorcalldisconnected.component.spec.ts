import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoanswerorcalldisconnectedComponent } from './noanswerorcalldisconnected.component';

describe('NoanswerorcalldisconnectedComponent', () => {
  let component: NoanswerorcalldisconnectedComponent;
  let fixture: ComponentFixture<NoanswerorcalldisconnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoanswerorcalldisconnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoanswerorcalldisconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
