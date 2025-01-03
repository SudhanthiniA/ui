import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldengineerComponent } from './fieldengineer.component';

describe('FieldengineerComponent', () => {
  let component: FieldengineerComponent;
  let fixture: ComponentFixture<FieldengineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldengineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
