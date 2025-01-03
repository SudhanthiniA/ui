import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmisofrptevidforunschdledinspectComponent } from './submisofrptevidforunschdledinspect.component';

describe('SubmisofrptevidforunschdledinspectComponent', () => {
  let component: SubmisofrptevidforunschdledinspectComponent;
  let fixture: ComponentFixture<SubmisofrptevidforunschdledinspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmisofrptevidforunschdledinspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmisofrptevidforunschdledinspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
