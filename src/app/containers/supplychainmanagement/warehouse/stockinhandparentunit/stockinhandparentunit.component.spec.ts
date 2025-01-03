import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinhandparentunitComponent } from './stockinhandparentunit.component';

describe('StockinhandparentunitComponent', () => {
  let component: StockinhandparentunitComponent;
  let fixture: ComponentFixture<StockinhandparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinhandparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinhandparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
