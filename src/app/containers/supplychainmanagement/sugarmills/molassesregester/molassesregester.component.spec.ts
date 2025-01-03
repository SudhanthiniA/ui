import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesregesterComponent } from './molassesregester.component';

describe('MolassesregesterComponent', () => {
  let component: MolassesregesterComponent;
  let fixture: ComponentFixture<MolassesregesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesregesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesregesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
