import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstocktransferexpiredComponent } from './viewstocktransferexpired.component';

describe('ViewstocktransferexpiredComponent', () => {
  let component: ViewstocktransferexpiredComponent;
  let fixture: ComponentFixture<ViewstocktransferexpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstocktransferexpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstocktransferexpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
