import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeclarationofplanComponent } from './adddeclarationofplan.component';

describe('AdddeclarationofplanComponent', () => {
  let component: AdddeclarationofplanComponent;
  let fixture: ComponentFixture<AdddeclarationofplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeclarationofplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeclarationofplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
