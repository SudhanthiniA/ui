import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsupplytypeComponent } from './liquorsupplytype.component';

describe('LiquorsupplytypeComponent', () => {
  let component: LiquorsupplytypeComponent;
  let fixture: ComponentFixture<LiquorsupplytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorsupplytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorsupplytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
