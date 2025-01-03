import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransfertoplantComponent } from './addtransfertoplant.component';

describe('AddtransfertoplantComponent', () => {
  let component: AddtransfertoplantComponent;
  let fixture: ComponentFixture<AddtransfertoplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransfertoplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransfertoplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
