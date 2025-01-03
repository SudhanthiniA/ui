import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeclarationforyearComponent } from './viewdeclarationforyear.component';

describe('ViewdeclarationforyearComponent', () => {
  let component: ViewdeclarationforyearComponent;
  let fixture: ComponentFixture<ViewdeclarationforyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeclarationforyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeclarationforyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
