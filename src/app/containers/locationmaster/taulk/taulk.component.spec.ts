import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulkComponent } from './taulk.component';

describe('TaulkComponent', () => {
  let component: TaulkComponent;
  let fixture: ComponentFixture<TaulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
