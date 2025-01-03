import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktransferviewComponent } from './tanktransferview.component';

describe('TanktransferviewComponent', () => {
  let component: TanktransferviewComponent;
  let fixture: ComponentFixture<TanktransferviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanktransferviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktransferviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
