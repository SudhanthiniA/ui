import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshelflifeComponent } from './viewshelflife.component';

describe('ViewshelflifeComponent', () => {
  let component: ViewshelflifeComponent;
  let fixture: ComponentFixture<ViewshelflifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshelflifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshelflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
