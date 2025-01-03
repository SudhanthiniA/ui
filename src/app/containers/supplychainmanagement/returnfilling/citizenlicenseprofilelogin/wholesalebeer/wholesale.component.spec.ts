import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalebeerComponent } from './wholesale.component';

describe('WholesalebeerComponent', () => {
  let component: WholesalebeerComponent;
  let fixture: ComponentFixture<WholesalebeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalebeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalebeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
