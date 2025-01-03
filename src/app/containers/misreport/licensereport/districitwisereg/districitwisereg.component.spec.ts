import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistricitwiseregComponent } from './districitwisereg.component';

describe('DistricitwiseregComponent', () => {
  let component: DistricitwiseregComponent;
  let fixture: ComponentFixture<DistricitwiseregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistricitwiseregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistricitwiseregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
