import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdroomdismantleComponent } from './coldroomdismantle.component';

describe('ColdroomdismantleComponent', () => {
  let component: ColdroomdismantleComponent;
  let fixture: ComponentFixture<ColdroomdismantleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdroomdismantleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdroomdismantleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
