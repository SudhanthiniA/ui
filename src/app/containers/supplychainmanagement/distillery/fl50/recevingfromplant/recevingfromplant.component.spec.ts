import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecevingfromplantComponent } from './recevingfromplant.component';

describe('RecevingfromplantComponent', () => {
  let component: RecevingfromplantComponent;
  let fixture: ComponentFixture<RecevingfromplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecevingfromplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecevingfromplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
