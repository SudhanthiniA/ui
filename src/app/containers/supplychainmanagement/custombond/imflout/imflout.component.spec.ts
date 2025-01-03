import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImfloutComponent } from './imflout.component';

describe('ImfloutComponent', () => {
  let component: ImfloutComponent;
  let fixture: ComponentFixture<ImfloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImfloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImfloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
