import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgenerateqrcodeComponent } from './addgenerateqrcode.component';

describe('AddgenerateqrcodeComponent', () => {
  let component: AddgenerateqrcodeComponent;
  let fixture: ComponentFixture<AddgenerateqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgenerateqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgenerateqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
