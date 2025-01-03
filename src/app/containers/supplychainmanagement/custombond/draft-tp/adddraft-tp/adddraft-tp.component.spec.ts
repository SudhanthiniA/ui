import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddraftTpComponent } from './adddraft-tp.component';

describe('AdddraftTpComponent', () => {
  let component: AdddraftTpComponent;
  let fixture: ComponentFixture<AdddraftTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddraftTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddraftTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
