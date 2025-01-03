import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationfortransferComponent } from './applicationfortransfer.component';

describe('ApplicationfortransferComponent', () => {
  let component: ApplicationfortransferComponent;
  let fixture: ComponentFixture<ApplicationfortransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationfortransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationfortransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
