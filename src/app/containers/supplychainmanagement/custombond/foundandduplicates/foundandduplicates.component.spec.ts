import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundandduplicatesComponent } from './foundandduplicates.component';

describe('FoundandduplicatesComponent', () => {
  let component: FoundandduplicatesComponent;
  let fixture: ComponentFixture<FoundandduplicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundandduplicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundandduplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
