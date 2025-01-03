import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeodetailedviewComponent } from './deodetailedview.component';

describe('DeodetailedviewComponent', () => {
  let component: DeodetailedviewComponent;
  let fixture: ComponentFixture<DeodetailedviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeodetailedviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeodetailedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
