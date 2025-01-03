import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwareprofileComponent } from './masterwareprofile.component';

describe('MasterwareprofileComponent', () => {
  let component: MasterwareprofileComponent;
  let fixture: ComponentFixture<MasterwareprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwareprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwareprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
