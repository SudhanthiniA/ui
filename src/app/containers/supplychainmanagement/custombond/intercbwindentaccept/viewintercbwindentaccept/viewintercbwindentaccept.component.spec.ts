import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewintercbwindentacceptComponent } from './viewintercbwindentaccept.component';

describe('ViewintercbwindentacceptComponent', () => {
  let component: ViewintercbwindentacceptComponent;
  let fixture: ComponentFixture<ViewintercbwindentacceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewintercbwindentacceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewintercbwindentacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
