import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentacceptanceforwholesaleComponent } from './indentacceptanceforwholesale.component';

describe('IndentacceptanceforwholesaleComponent', () => {
  let component: IndentacceptanceforwholesaleComponent;
  let fixture: ComponentFixture<IndentacceptanceforwholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentacceptanceforwholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentacceptanceforwholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
