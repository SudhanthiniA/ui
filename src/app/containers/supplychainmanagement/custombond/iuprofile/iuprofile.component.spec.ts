import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuprofileComponent } from './iuprofile.component';

describe('IuprofileComponent', () => {
  let component: IuprofileComponent;
  let fixture: ComponentFixture<IuprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
