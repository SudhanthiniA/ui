import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesviewComponent } from './molassesview.component';

describe('MolassesviewComponent', () => {
  let component: MolassesviewComponent;
  let fixture: ComponentFixture<MolassesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
