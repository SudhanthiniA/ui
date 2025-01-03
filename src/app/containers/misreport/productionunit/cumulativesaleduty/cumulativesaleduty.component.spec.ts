import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativesaledutyComponent } from './cumulativesaleduty.component';

describe('CumulativesaledutyComponent', () => {
  let component: CumulativesaledutyComponent;
  let fixture: ComponentFixture<CumulativesaledutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativesaledutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativesaledutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
