import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedlabelsComponent } from './addedlabels.component';

describe('AddedlabelsComponent', () => {
  let component: AddedlabelsComponent;
  let fixture: ComponentFixture<AddedlabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedlabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedlabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
