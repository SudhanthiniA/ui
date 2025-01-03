import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivernewComponent } from './receivernew.component';

describe('ReceivernewComponent', () => {
  let component: ReceivernewComponent;
  let fixture: ComponentFixture<ReceivernewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivernewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
