import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwhmappingComponent } from './mwhmapping.component';

describe('MwhmappingComponent', () => {
  let component: MwhmappingComponent;
  let fixture: ComponentFixture<MwhmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwhmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwhmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
