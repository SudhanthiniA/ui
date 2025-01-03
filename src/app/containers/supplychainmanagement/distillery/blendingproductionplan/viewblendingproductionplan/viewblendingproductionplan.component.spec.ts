import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewblendingproductionplanComponent } from './viewblendingproductionplan.component';

describe('ViewblendingproductionplanComponent', () => {
  let component: ViewblendingproductionplanComponent;
  let fixture: ComponentFixture<ViewblendingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewblendingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewblendingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
