import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeastprocessComponent } from './yeastprocess.component';

describe('YeastprocessComponent', () => {
  let component: YeastprocessComponent;
  let fixture: ComponentFixture<YeastprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeastprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeastprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
