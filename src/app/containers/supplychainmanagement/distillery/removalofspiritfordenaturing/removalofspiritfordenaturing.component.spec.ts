import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalofspiritfordenaturingComponent } from './removalofspiritfordenaturing.component';

describe('RemovalofspiritfordenaturingComponent', () => {
  let component: RemovalofspiritfordenaturingComponent;
  let fixture: ComponentFixture<RemovalofspiritfordenaturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovalofspiritfordenaturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovalofspiritfordenaturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
