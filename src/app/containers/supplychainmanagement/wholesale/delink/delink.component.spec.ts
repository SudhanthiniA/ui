import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinkComponent } from './delink.component';

describe('DelinkComponent', () => {
  let component: DelinkComponent;
  let fixture: ComponentFixture<DelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
