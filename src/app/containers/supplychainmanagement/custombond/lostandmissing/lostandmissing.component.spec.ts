import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostandmissingComponent } from './lostandmissing.component';

describe('LostandmissingComponent', () => {
  let component: LostandmissingComponent;
  let fixture: ComponentFixture<LostandmissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostandmissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostandmissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
