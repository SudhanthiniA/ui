import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptancelistComponent } from './acceptancelist.component';

describe('AcceptancelistComponent', () => {
  let component: AcceptancelistComponent;
  let fixture: ComponentFixture<AcceptancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
