import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldengglistComponent } from './fieldengglist.component';

describe('FieldengglistComponent', () => {
  let component: FieldengglistComponent;
  let fixture: ComponentFixture<FieldengglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldengglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldengglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
