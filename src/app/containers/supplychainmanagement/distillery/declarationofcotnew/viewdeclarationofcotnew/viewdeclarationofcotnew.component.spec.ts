import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeclarationofcotnewComponent } from './viewdeclarationofcotnew.component';

describe('ViewdeclarationofcotnewComponent', () => {
  let component: ViewdeclarationofcotnewComponent;
  let fixture: ComponentFixture<ViewdeclarationofcotnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeclarationofcotnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeclarationofcotnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
