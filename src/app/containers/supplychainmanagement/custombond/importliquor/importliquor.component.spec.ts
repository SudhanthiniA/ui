import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportliquorComponent } from './importliquor.component';

describe('ImportliquorComponent', () => {
  let component: ImportliquorComponent;
  let fixture: ComponentFixture<ImportliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
