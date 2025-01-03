import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspiritimportfeesComponent } from './editspiritimportfees.component';

describe('EditspiritimportfeesComponent', () => {
  let component: EditspiritimportfeesComponent;
  let fixture: ComponentFixture<EditspiritimportfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspiritimportfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspiritimportfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
