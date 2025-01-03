import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewurbanComponent } from './viewurban.component';

describe('ViewurbanComponent', () => {
  let component: ViewurbanComponent;
  let fixture: ComponentFixture<ViewurbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewurbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewurbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
