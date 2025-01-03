import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftfinalpasslistComponent } from './draftfinalpasslist.component';

describe('DraftfinalpasslistComponent', () => {
  let component: DraftfinalpasslistComponent;
  let fixture: ComponentFixture<DraftfinalpasslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftfinalpasslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftfinalpasslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
