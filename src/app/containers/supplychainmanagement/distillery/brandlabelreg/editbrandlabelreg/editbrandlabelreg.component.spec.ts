import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbrandlabelregComponent } from './editbrandlabelreg.component';

describe('EditbrandlabelregComponent', () => {
  let component: EditbrandlabelregComponent;
  let fixture: ComponentFixture<EditbrandlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbrandlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbrandlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
