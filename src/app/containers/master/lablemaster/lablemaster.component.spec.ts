import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LablemasterComponent } from './lablemaster.component';

describe('LablemasterComponent', () => {
  let component: LablemasterComponent;
  let fixture: ComponentFixture<LablemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LablemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LablemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
