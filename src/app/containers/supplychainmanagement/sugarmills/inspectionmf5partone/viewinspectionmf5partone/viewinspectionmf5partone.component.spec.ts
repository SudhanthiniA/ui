import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewinspectionmf5partoneComponent } from './viewinspectionmf5partone.component';

describe('Viewinspectionmf5partoneComponent', () => {
  let component: Viewinspectionmf5partoneComponent;
  let fixture: ComponentFixture<Viewinspectionmf5partoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewinspectionmf5partoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewinspectionmf5partoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
