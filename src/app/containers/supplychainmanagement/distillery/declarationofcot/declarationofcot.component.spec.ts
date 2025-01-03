import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationofcotComponent } from './declarationofcot.component';

describe('DeclarationofcotComponent', () => {
  let component: DeclarationofcotComponent;
  let fixture: ComponentFixture<DeclarationofcotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationofcotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationofcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
