import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl9newComponent } from './bwfl9new.component';

describe('Bwfl9newComponent', () => {
  let component: Bwfl9newComponent;
  let fixture: ComponentFixture<Bwfl9newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl9newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl9newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
