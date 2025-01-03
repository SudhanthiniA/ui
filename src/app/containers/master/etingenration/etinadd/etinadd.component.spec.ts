import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtinaddComponent } from './etinadd.component';

describe('EtinaddComponent', () => {
  let component: EtinaddComponent;
  let fixture: ComponentFixture<EtinaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtinaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtinaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
