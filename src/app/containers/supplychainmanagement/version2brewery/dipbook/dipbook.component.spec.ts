import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipbookComponent } from './dipbook.component';

describe('DipbookComponent', () => {
  let component: DipbookComponent;
  let fixture: ComponentFixture<DipbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
