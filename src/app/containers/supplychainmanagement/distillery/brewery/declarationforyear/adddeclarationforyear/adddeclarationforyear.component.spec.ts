import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeclarationforyearComponent } from './adddeclarationforyear.component';

describe('AdddeclarationforyearComponent', () => {
  let component: AdddeclarationforyearComponent;
  let fixture: ComponentFixture<AdddeclarationforyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeclarationforyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeclarationforyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
