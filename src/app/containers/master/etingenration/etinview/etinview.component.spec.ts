import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtinviewComponent } from './etinview.component';

describe('EtinviewComponent', () => {
  let component: EtinviewComponent;
  let fixture: ComponentFixture<EtinviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtinviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtinviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
