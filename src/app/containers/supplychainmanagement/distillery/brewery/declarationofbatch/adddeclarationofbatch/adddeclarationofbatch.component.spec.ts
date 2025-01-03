import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeclarationofbatchComponent } from './adddeclarationofbatch.component';

describe('AdddeclarationofbatchComponent', () => {
  let component: AdddeclarationofbatchComponent;
  let fixture: ComponentFixture<AdddeclarationofbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeclarationofbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeclarationofbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
