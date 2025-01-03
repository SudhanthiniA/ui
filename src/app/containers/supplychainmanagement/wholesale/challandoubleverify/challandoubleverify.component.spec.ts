import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallandoubleverifyComponent } from './challandoubleverify.component';

describe('ChallandoubleverifyComponent', () => {
  let component: ChallandoubleverifyComponent;
  let fixture: ComponentFixture<ChallandoubleverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallandoubleverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallandoubleverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
