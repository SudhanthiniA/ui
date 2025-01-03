import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeolistviewComponent } from './deolistview.component';

describe('DeolistviewComponent', () => {
  let component: DeolistviewComponent;
  let fixture: ComponentFixture<DeolistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeolistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeolistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
