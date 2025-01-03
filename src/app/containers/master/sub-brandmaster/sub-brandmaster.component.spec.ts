import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBrandmasterComponent } from './sub-brandmaster.component';

describe('SubBrandmasterComponent', () => {
  let component: SubBrandmasterComponent;
  let fixture: ComponentFixture<SubBrandmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubBrandmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBrandmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
