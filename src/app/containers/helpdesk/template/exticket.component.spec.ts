import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExticketComponent } from './exticket.component';

describe('ExticketComponent', () => {
  let component: ExticketComponent;
  let fixture: ComponentFixture<ExticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
