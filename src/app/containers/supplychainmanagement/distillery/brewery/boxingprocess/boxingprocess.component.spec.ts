import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxingprocessComponent } from './boxingprocess.component';

describe('BoxingprocessComponent', () => {
  let component: BoxingprocessComponent;
  let fixture: ComponentFixture<BoxingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
