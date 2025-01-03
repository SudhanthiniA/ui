import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlostandmissingComponent } from './viewlostandmissing.component';

describe('ViewlostandmissingComponent', () => {
  let component: ViewlostandmissingComponent;
  let fixture: ComponentFixture<ViewlostandmissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlostandmissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlostandmissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
