import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingtypeComponent } from './bottlingtype.component';

describe('BottlingtypeComponent', () => {
  let component: BottlingtypeComponent;
  let fixture: ComponentFixture<BottlingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
