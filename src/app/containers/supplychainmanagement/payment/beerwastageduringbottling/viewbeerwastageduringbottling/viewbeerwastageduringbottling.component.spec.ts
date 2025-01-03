import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbeerwastageduringbottlingComponent } from './viewbeerwastageduringbottling.component';

describe('ViewbeerwastageduringbottlingComponent', () => {
  let component: ViewbeerwastageduringbottlingComponent;
  let fixture: ComponentFixture<ViewbeerwastageduringbottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbeerwastageduringbottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbeerwastageduringbottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
