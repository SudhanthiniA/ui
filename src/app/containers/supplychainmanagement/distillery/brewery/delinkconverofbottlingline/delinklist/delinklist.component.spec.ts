import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinklistComponent } from './delinklist.component';

describe('DelinklistComponent', () => {
  let component: DelinklistComponent;
  let fixture: ComponentFixture<DelinklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
