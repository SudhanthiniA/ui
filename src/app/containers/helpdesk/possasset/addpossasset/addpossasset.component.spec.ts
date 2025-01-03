import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpossassetComponent } from './addpossasset.component';

describe('AddpossassetComponent', () => {
  let component: AddpossassetComponent;
  let fixture: ComponentFixture<AddpossassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpossassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpossassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
