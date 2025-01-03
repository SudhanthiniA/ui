import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinhandnewComponent } from './stockinhandnew.component';

describe('StockinhandnewComponent', () => {
  let component: StockinhandnewComponent;
  let fixture: ComponentFixture<StockinhandnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinhandnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinhandnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
