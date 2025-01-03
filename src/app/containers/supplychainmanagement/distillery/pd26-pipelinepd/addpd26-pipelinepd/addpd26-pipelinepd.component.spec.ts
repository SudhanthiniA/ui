import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd26PipelinepdComponent } from './addpd26-pipelinepd.component';

describe('Addpd26PipelinepdComponent', () => {
  let component: Addpd26PipelinepdComponent;
  let fixture: ComponentFixture<Addpd26PipelinepdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd26PipelinepdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd26PipelinepdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
