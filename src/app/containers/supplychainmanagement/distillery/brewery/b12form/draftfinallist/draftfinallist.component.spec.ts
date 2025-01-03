import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftfinallistComponent } from './draftfinallist.component';

describe('DraftfinallistComponent', () => {
  let component: DraftfinallistComponent;
  let fixture: ComponentFixture<DraftfinallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftfinallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftfinallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
