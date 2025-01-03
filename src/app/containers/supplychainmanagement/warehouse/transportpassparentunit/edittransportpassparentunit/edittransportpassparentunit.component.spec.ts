import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittransportpassparentunitComponent } from './edittransportpassparentunit.component';

describe('EdittransportpassparentunitComponent', () => {
  let component: EdittransportpassparentunitComponent;
  let fixture: ComponentFixture<EdittransportpassparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittransportpassparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittransportpassparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
