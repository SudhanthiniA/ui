import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforimportofmolassesComponent } from './applicationforimportofmolasses.component';

describe('ApplicationforimportofmolassesComponent', () => {
  let component: ApplicationforimportofmolassesComponent;
  let fixture: ComponentFixture<ApplicationforimportofmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforimportofmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforimportofmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
