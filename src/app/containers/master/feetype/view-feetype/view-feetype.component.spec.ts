import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeetypeComponent } from './view-feetype.component';

describe('ViewFeetypeComponent', () => {
  let component: ViewFeetypeComponent;
  let fixture: ComponentFixture<ViewFeetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
