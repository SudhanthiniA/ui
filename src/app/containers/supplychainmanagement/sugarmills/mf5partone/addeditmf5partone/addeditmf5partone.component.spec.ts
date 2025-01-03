import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditmf5partoneComponent } from './addeditmf5partone.component';

describe('Addeditmf5partoneComponent', () => {
  let component: Addeditmf5partoneComponent;
  let fixture: ComponentFixture<Addeditmf5partoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditmf5partoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditmf5partoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
