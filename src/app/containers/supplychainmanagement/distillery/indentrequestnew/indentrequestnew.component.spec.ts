import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentrequestnewComponent } from './indentrequestnew.component';

describe('IndentrequestnewComponent', () => {
  let component: IndentrequestnewComponent;
  let fixture: ComponentFixture<IndentrequestnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentrequestnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentrequestnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
