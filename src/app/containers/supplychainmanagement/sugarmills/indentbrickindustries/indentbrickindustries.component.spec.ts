import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentbrickindustriesComponent } from './indentbrickindustries.component';

describe('IndentbrickindustriesComponent', () => {
  let component: IndentbrickindustriesComponent;
  let fixture: ComponentFixture<IndentbrickindustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentbrickindustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentbrickindustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
