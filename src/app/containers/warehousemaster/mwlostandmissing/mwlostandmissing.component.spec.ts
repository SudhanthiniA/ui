import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwlostandmissingComponent } from './mwlostandmissing.component';

describe('MwlostandmissingComponent', () => {
  let component: MwlostandmissingComponent;
  let fixture: ComponentFixture<MwlostandmissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwlostandmissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwlostandmissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
