import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottleboxingComponent } from './addbottleboxing.component';

describe('AddbottleboxingComponent', () => {
  let component: AddbottleboxingComponent;
  let fixture: ComponentFixture<AddbottleboxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottleboxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottleboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
