import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl6newComponent } from './bwfl6new.component';

describe('Bwfl6newComponent', () => {
  let component: Bwfl6newComponent;
  let fixture: ComponentFixture<Bwfl6newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl6newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl6newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
