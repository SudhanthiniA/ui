import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemmasterComponent } from './additemmaster.component';

describe('AdditemmasterComponent', () => {
  let component: AdditemmasterComponent;
  let fixture: ComponentFixture<AdditemmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
