import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgoodstypemasterComponent } from './addgoodstypemaster.component';

describe('AddgoodstypemasterComponent', () => {
  let component: AddgoodstypemasterComponent;
  let fixture: ComponentFixture<AddgoodstypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgoodstypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgoodstypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
