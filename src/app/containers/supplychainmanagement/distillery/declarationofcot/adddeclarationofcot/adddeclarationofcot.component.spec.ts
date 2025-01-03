import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeclarationofcotComponent } from './adddeclarationofcot.component';

describe('AdddeclarationofcotComponent', () => {
  let component: AdddeclarationofcotComponent;
  let fixture: ComponentFixture<AdddeclarationofcotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeclarationofcotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeclarationofcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
