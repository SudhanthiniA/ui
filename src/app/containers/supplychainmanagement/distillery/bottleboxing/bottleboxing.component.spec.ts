import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleboxingComponent } from './bottleboxing.component';

describe('BottleboxingComponent', () => {
  let component: BottleboxingComponent;
  let fixture: ComponentFixture<BottleboxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleboxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
