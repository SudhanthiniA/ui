import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspectionmf5partoneComponent } from './inspectionmf5partone.component';

describe('Inspectionmf5partoneComponent', () => {
  let component: Inspectionmf5partoneComponent;
  let fixture: ComponentFixture<Inspectionmf5partoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inspectionmf5partoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inspectionmf5partoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
