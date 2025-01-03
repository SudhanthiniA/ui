import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EalwastageComponent } from './ealwastage.component';

describe('EalwastageComponent', () => {
  let component: EalwastageComponent;
  let fixture: ComponentFixture<EalwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EalwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EalwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
