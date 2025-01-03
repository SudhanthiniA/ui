import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedtranspassComponent } from './modifiedtranspass.component';

describe('ModifiedtranspassComponent', () => {
  let component: ModifiedtranspassComponent;
  let fixture: ComponentFixture<ModifiedtranspassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedtranspassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedtranspassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
