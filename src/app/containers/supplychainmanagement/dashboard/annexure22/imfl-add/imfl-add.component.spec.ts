import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImflAddComponent } from './imfl-add.component';

describe('ImflAddComponent', () => {
  let component: ImflAddComponent;
  let fixture: ComponentFixture<ImflAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImflAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImflAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
