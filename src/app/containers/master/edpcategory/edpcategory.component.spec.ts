import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpcategoryComponent } from './edpcategory.component';

describe('EdpcategoryComponent', () => {
  let component: EdpcategoryComponent;
  let fixture: ComponentFixture<EdpcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
