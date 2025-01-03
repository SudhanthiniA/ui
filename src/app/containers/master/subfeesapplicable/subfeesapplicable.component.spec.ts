import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfeesapplicableComponent } from './subfeesapplicable.component';

describe('SubfeesapplicableComponent', () => {
  let component: SubfeesapplicableComponent;
  let fixture: ComponentFixture<SubfeesapplicableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfeesapplicableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfeesapplicableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
