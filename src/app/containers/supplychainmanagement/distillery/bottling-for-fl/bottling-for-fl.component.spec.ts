import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingForFlComponent } from './bottling-for-fl.component';

describe('BottlingForFlComponent', () => {
  let component: BottlingForFlComponent;
  let fixture: ComponentFixture<BottlingForFlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingForFlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingForFlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
