import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpendingrequestComponent } from './addpendingrequest.component';

describe('AddpendingrequestComponent', () => {
  let component: AddpendingrequestComponent;
  let fixture: ComponentFixture<AddpendingrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpendingrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpendingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
