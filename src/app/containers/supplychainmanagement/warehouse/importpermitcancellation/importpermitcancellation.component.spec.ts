import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitcancellationComponent } from './importpermitcancellation.component';

describe('ImportpermitcancellationComponent', () => {
  let component: ImportpermitcancellationComponent;
  let fixture: ComponentFixture<ImportpermitcancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitcancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
