import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeclarationofproplanofbeerComponent } from './adddeclarationofproplanofbeer.component';

describe('AdddeclarationofproplanofbeerComponent', () => {
  let component: AdddeclarationofproplanofbeerComponent;
  let fixture: ComponentFixture<AdddeclarationofproplanofbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeclarationofproplanofbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeclarationofproplanofbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
