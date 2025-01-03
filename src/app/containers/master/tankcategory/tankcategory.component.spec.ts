import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankcategoryComponent } from './tankcategory.component';

describe('TankcategoryComponent', () => {
  let component: TankcategoryComponent;
  let fixture: ComponentFixture<TankcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
