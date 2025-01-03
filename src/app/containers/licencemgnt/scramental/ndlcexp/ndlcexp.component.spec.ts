import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdlcexpComponent } from './ndlcexp.component';

describe('NdlcexpComponent', () => {
  let component: NdlcexpComponent;
  let fixture: ComponentFixture<NdlcexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdlcexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdlcexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
