import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessapprovalpersonComponent } from './processapprovalperson.component';

describe('ProcessapprovalpersonComponent', () => {
  let component: ProcessapprovalpersonComponent;
  let fixture: ComponentFixture<ProcessapprovalpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessapprovalpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessapprovalpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
