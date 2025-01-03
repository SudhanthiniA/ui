import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeclarationofproplanofbeerComponent } from './viewdeclarationofproplanofbeer.component';

describe('ViewdeclarationofproplanofbeerComponent', () => {
  let component: ViewdeclarationofproplanofbeerComponent;
  let fixture: ComponentFixture<ViewdeclarationofproplanofbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeclarationofproplanofbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeclarationofproplanofbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
