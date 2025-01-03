import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdepermitComponent } from './ndepermit.component';

describe('NdepermitComponent', () => {
  let component: NdepermitComponent;
  let fixture: ComponentFixture<NdepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
