import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartdeliveredindentComponent } from './partdeliveredindent.component';

describe('PartdeliveredindentComponent', () => {
  let component: PartdeliveredindentComponent;
  let fixture: ComponentFixture<PartdeliveredindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartdeliveredindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartdeliveredindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
