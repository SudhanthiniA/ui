import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoaddposassetComponent } from './deoaddposasset.component';

describe('DeoaddposassetComponent', () => {
  let component: DeoaddposassetComponent;
  let fixture: ComponentFixture<DeoaddposassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoaddposassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoaddposassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
