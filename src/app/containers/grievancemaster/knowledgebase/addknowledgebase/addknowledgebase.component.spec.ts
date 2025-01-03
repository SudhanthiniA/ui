import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddknowledgebaseComponent } from './addknowledgebase.component';

describe('AddknowledgebaseComponent', () => {
  let component: AddknowledgebaseComponent;
  let fixture: ComponentFixture<AddknowledgebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddknowledgebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddknowledgebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
