import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd26PipelinepdComponent } from './viewpd26-pipelinepd.component';

describe('Viewpd26PipelinepdComponent', () => {
  let component: Viewpd26PipelinepdComponent;
  let fixture: ComponentFixture<Viewpd26PipelinepdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd26PipelinepdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd26PipelinepdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
