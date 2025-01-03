import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditinspectionmf5partoneComponent } from './addeditinspectionmf5partone.component';

describe('Addeditinspectionmf5partoneComponent', () => {
  let component: Addeditinspectionmf5partoneComponent;
  let fixture: ComponentFixture<Addeditinspectionmf5partoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditinspectionmf5partoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditinspectionmf5partoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
