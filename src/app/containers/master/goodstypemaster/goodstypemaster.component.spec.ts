import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodstypemasterComponent } from './goodstypemaster.component';

describe('GoodstypemasterComponent', () => {
  let component: GoodstypemasterComponent;
  let fixture: ComponentFixture<GoodstypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodstypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodstypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
