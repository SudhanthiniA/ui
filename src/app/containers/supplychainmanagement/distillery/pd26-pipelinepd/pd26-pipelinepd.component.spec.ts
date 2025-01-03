import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26PipelinepdComponent } from './pd26-pipelinepd.component';

describe('Pd26PipelinepdComponent', () => {
  let component: Pd26PipelinepdComponent;
  let fixture: ComponentFixture<Pd26PipelinepdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26PipelinepdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26PipelinepdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
