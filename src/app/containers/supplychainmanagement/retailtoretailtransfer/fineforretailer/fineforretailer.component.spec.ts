import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineforretailerComponent } from './fineforretailer.component';

describe('FineforretailerComponent', () => {
  let component: FineforretailerComponent;
  let fixture: ComponentFixture<FineforretailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineforretailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineforretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
