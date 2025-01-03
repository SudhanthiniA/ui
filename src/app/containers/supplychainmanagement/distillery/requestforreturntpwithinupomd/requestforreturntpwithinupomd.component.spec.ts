import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforreturntpwithinupomdComponent } from './requestforreturntpwithinupomd.component';

describe('RequestforreturntpwithinupomdComponent', () => {
  let component: RequestforreturntpwithinupomdComponent;
  let fixture: ComponentFixture<RequestforreturntpwithinupomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforreturntpwithinupomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforreturntpwithinupomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
