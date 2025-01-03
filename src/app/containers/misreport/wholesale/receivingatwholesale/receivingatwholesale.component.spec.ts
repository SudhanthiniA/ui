import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingatwholesaleComponent } from './receivingatwholesale.component';

describe('ReceivingatwholesaleComponent', () => {
  let component: ReceivingatwholesaleComponent;
  let fixture: ComponentFixture<ReceivingatwholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingatwholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingatwholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
