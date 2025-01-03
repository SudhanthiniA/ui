import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingwastageComponent } from './processingwastage.component';

describe('ProcessingwastageComponent', () => {
  let component: ProcessingwastageComponent;
  let fixture: ComponentFixture<ProcessingwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
