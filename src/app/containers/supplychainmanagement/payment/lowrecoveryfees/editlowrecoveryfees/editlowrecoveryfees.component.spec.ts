import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlowrecoveryfeesComponent } from './editlowrecoveryfees.component';

describe('EditlowrecoveryfeesComponent', () => {
  let component: EditlowrecoveryfeesComponent;
  let fixture: ComponentFixture<EditlowrecoveryfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlowrecoveryfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlowrecoveryfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
