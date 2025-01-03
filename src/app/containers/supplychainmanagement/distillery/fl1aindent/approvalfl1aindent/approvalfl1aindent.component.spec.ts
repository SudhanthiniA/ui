import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Approvalfl1aindentComponent } from './approvalfl1aindent.component';

describe('Approvalfl1aindentComponent', () => {
  let component: Approvalfl1aindentComponent;
  let fixture: ComponentFixture<Approvalfl1aindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Approvalfl1aindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Approvalfl1aindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
