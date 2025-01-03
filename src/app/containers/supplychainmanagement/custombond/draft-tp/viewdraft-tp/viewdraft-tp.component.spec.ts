import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdraftTpComponent } from './viewdraft-tp.component';

describe('ViewdraftTpComponent', () => {
  let component: ViewdraftTpComponent;
  let fixture: ComponentFixture<ViewdraftTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdraftTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdraftTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
