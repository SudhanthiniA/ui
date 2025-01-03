import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferrequestComponent } from './stocktransferrequest.component';

describe('StocktransferrequestComponent', () => {
  let component: StocktransferrequestComponent;
  let fixture: ComponentFixture<StocktransferrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktransferrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktransferrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
