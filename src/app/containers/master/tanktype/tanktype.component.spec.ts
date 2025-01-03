import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktypeComponent } from './tanktype.component';

describe('TanktypeComponent', () => {
  let component: TanktypeComponent;
  let fixture: ComponentFixture<TanktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
