import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportpermitnewComponent } from './viewimportpermitnew.component';

describe('ViewimportpermitnewComponent', () => {
  let component: ViewimportpermitnewComponent;
  let fixture: ComponentFixture<ViewimportpermitnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportpermitnewComponent ]
    })
    .compileComponents();
  }));
    
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportpermitnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
