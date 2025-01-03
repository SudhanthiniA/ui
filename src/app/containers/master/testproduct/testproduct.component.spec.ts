import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestproductComponent } from './testproduct.component';

describe('TestproductComponent', () => {
  let component: TestproductComponent;
  let fixture: ComponentFixture<TestproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
