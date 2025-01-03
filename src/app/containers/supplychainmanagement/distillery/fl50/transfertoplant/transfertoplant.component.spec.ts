import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertoplantComponent } from './transfertoplant.component';

describe('TransfertoplantComponent', () => {
  let component: TransfertoplantComponent;
  let fixture: ComponentFixture<TransfertoplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertoplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertoplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
