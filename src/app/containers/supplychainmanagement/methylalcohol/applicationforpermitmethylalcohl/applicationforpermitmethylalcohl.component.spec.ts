import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforpermitmethylalcohlComponent } from './applicationforpermitmethylalcohl.component';

describe('ApplicationforpermitmethylalcohlComponent', () => {
  let component: ApplicationforpermitmethylalcohlComponent;
  let fixture: ComponentFixture<ApplicationforpermitmethylalcohlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforpermitmethylalcohlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforpermitmethylalcohlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
