import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationofcaseComponent } from './creationofcase.component';

describe('CreationofcaseComponent', () => {
  let component: CreationofcaseComponent;
  let fixture: ComponentFixture<CreationofcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationofcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationofcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
