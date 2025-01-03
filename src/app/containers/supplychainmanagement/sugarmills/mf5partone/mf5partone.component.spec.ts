import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf5partoneComponent } from './mf5partone.component';

describe('Mf5partoneComponent', () => {
  let component: Mf5partoneComponent;
  let fixture: ComponentFixture<Mf5partoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf5partoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf5partoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
