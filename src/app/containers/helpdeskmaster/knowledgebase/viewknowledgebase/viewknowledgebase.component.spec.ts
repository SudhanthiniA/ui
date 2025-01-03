import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewknowledgebaseComponent } from './viewknowledgebase.component';

describe('ViewknowledgebaseComponent', () => {
  let component: ViewknowledgebaseComponent;
  let fixture: ComponentFixture<ViewknowledgebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewknowledgebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewknowledgebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
