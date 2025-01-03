import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlinglinedismantleComponent } from './bottlinglinedismantle.component';

describe('BottlinglinedismantleComponent', () => {
  let component: BottlinglinedismantleComponent;
  let fixture: ComponentFixture<BottlinglinedismantleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlinglinedismantleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlinglinedismantleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
