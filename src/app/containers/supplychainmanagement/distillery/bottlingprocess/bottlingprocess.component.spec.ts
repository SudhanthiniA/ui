import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingprocessComponent } from './bottlingprocess.component';

describe('BottlingprocessComponent', () => {
  let component: BottlingprocessComponent;
  let fixture: ComponentFixture<BottlingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
