import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeclarationofcotnewComponent } from './adddeclarationofcotnew.component';

describe('AdddeclarationofcotnewComponent', () => {
  let component: AdddeclarationofcotnewComponent;
  let fixture: ComponentFixture<AdddeclarationofcotnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeclarationofcotnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeclarationofcotnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
