import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acknownledgementpd26PipelinepdComponent } from './acknownledgementpd26-pipelinepd.component';

describe('Acknownledgementpd26PipelinepdComponent', () => {
  let component: Acknownledgementpd26PipelinepdComponent;
  let fixture: ComponentFixture<Acknownledgementpd26PipelinepdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acknownledgementpd26PipelinepdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acknownledgementpd26PipelinepdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
