import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewitemmasterComponent } from './viewitemmaster.component';

describe('ViewitemmasterComponent', () => {
  let component: ViewitemmasterComponent;
  let fixture: ComponentFixture<ViewitemmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewitemmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewitemmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
