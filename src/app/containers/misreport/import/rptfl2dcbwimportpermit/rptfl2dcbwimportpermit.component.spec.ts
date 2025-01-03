import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rptfl2dcbwimportpermitComponent } from './rptfl2dcbwimportpermit.component';

describe('Rptfl2dcbwimportpermitComponent', () => {
  let component: Rptfl2dcbwimportpermitComponent;
  let fixture: ComponentFixture<Rptfl2dcbwimportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rptfl2dcbwimportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rptfl2dcbwimportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
