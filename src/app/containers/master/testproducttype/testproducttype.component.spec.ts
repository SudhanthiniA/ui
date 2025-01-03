import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestproducttypeComponent } from './testproducttype.component';

describe('TestproducttypeComponent', () => {
  let component: TestproducttypeComponent;
  let fixture: ComponentFixture<TestproducttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestproducttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
