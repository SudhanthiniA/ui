import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLiquortypeComponent } from './sub-liquortype.component';

describe('SubLiquortypeComponent', () => {
  let component: SubLiquortypeComponent;
  let fixture: ComponentFixture<SubLiquortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubLiquortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLiquortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
