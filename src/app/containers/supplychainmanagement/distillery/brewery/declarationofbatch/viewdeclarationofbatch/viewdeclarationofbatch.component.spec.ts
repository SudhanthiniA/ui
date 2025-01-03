import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeclarationofbatchComponent } from './viewdeclarationofbatch.component';

describe('ViewdeclarationofbatchComponent', () => {
  let component: ViewdeclarationofbatchComponent;
  let fixture: ComponentFixture<ViewdeclarationofbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeclarationofbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeclarationofbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
