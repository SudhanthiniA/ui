import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentrequestnewComponent } from './viewindentrequest.component';

describe('ViewindentrequestnewComponent', () => {
  let component: ViewindentrequestnewComponent;
  let fixture: ComponentFixture<ViewindentrequestnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentrequestnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentrequestnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
