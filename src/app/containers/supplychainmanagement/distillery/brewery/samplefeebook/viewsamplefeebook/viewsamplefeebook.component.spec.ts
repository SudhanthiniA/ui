import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsamplefeebookComponent } from './viewsamplefeebook.component';

describe('ViewsamplefeebookComponent', () => {
  let component: ViewsamplefeebookComponent;
  let fixture: ComponentFixture<ViewsamplefeebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsamplefeebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsamplefeebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
