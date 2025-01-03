import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterprimarydrumbarrelregComponent } from './masterprimarydrumbarrelreg.component';

describe('MasterprimarydrumbarrelregComponent', () => {
  let component: MasterprimarydrumbarrelregComponent;
  let fixture: ComponentFixture<MasterprimarydrumbarrelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterprimarydrumbarrelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterprimarydrumbarrelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
