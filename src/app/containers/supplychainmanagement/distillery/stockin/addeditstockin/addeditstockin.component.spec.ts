import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstockinComponent } from './addeditstockin.component';

describe('AddeditstockinComponent', () => {
  let component: AddeditstockinComponent;
  let fixture: ComponentFixture<AddeditstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
