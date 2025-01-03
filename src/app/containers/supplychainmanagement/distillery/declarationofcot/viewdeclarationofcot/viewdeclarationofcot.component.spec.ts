import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeclarationofcotComponent } from './viewdeclarationofcot.component';

describe('ViewdeclarationofcotComponent', () => {
  let component: ViewdeclarationofcotComponent;
  let fixture: ComponentFixture<ViewdeclarationofcotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeclarationofcotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeclarationofcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
