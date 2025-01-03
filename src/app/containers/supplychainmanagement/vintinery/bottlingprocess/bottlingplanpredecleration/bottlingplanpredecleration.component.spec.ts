import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingplanpredeclerationComponent } from './bottlingplanpredecleration.component';

describe('BottlingplanpredeclerationComponent', () => {
  let component: BottlingplanpredeclerationComponent;
  let fixture: ComponentFixture<BottlingplanpredeclerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingplanpredeclerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingplanpredeclerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
