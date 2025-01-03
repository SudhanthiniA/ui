import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportunitComponent } from './importunit.component';

describe('ImportunitComponent', () => {
  let component: ImportunitComponent;
  let fixture: ComponentFixture<ImportunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
