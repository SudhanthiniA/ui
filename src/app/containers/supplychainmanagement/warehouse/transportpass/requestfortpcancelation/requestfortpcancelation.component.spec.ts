import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestfortpcancelationComponent } from './requestfortpcancelation.component';

describe('RequestfortpcancelationComponent', () => {
  let component: RequestfortpcancelationComponent;
  let fixture: ComponentFixture<RequestfortpcancelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestfortpcancelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestfortpcancelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
