import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl4newComponent } from './bwfl4new.component';

describe('Bwfl4newComponent', () => {
  let component: Bwfl4newComponent;
  let fixture: ComponentFixture<Bwfl4newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl4newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl4newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
