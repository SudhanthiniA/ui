import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf5partoneComponent } from './viewmf5partone.component';

describe('Viewmf5partoneComponent', () => {
  let component: Viewmf5partoneComponent;
  let fixture: ComponentFixture<Viewmf5partoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf5partoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf5partoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
