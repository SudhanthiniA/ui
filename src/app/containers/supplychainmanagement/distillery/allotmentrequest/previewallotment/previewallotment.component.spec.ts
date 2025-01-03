import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewallotmentComponent } from './previewallotment.component';

describe('PreviewallotmentComponent', () => {
  let component: PreviewallotmentComponent;
  let fixture: ComponentFixture<PreviewallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
