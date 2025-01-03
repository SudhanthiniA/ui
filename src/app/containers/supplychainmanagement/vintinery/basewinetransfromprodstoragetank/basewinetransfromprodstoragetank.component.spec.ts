import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasewinetransfromprodstoragetankComponent } from './basewinetransfromprodstoragetank.component';

describe('BasewinetransfromprodstoragetankComponent', () => {
  let component: BasewinetransfromprodstoragetankComponent;
  let fixture: ComponentFixture<BasewinetransfromprodstoragetankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasewinetransfromprodstoragetankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasewinetransfromprodstoragetankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
