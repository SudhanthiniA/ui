import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferofbeerComponent } from './transferofbeer.component';

describe('TransferofbeerComponent', () => {
  let component: TransferofbeerComponent;
  let fixture: ComponentFixture<TransferofbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferofbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferofbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
