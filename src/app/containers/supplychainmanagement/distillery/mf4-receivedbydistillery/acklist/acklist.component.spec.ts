import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcklistComponent } from './acklist.component';

describe('AcklistComponent', () => {
  let component: AcklistComponent;
  let fixture: ComponentFixture<AcklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
