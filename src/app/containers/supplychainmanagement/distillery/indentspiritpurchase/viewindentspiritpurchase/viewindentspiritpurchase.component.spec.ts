import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentspiritpurchaseComponent } from './viewindentspiritpurchase.component';

describe('ViewindentspiritpurchaseComponent', () => {
  let component: ViewindentspiritpurchaseComponent;
  let fixture: ComponentFixture<ViewindentspiritpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentspiritpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentspiritpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
