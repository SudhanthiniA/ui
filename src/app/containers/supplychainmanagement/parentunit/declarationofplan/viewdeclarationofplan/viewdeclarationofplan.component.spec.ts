import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeclarationofplanComponent } from './viewdeclarationofplan.component';

describe('ViewdeclarationofplanComponent', () => {
  let component: ViewdeclarationofplanComponent;
  let fixture: ComponentFixture<ViewdeclarationofplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeclarationofplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeclarationofplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
