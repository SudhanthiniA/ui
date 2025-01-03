import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesrecieptandconsumpComponent } from './molassesrecieptandconsump.component';

describe('MolassesrecieptandconsumpComponent', () => {
  let component: MolassesrecieptandconsumpComponent;
  let fixture: ComponentFixture<MolassesrecieptandconsumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesrecieptandconsumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesrecieptandconsumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
