import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplefeebookComponent } from './samplefeebook.component';

describe('SamplefeebookComponent', () => {
  let component: SamplefeebookComponent;
  let fixture: ComponentFixture<SamplefeebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplefeebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplefeebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
