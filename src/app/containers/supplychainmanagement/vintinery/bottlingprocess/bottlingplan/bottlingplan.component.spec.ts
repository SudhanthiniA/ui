import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingplanComponent } from './bottlingplan.component';

describe('BottlingplanComponent', () => {
  let component: BottlingplanComponent;
  let fixture: ComponentFixture<BottlingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
