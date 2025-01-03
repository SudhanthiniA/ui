import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercbwindentacceptComponent } from './intercbwindentaccept.component';

describe('IntercbwindentacceptComponent', () => {
  let component: IntercbwindentacceptComponent;
  let fixture: ComponentFixture<IntercbwindentacceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercbwindentacceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercbwindentacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
