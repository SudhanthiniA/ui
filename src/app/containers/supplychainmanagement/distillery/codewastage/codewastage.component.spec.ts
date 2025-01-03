import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodewastageComponent } from './codewastage.component';

describe('CodewastageComponent', () => {
  let component: CodewastageComponent;
  let fixture: ComponentFixture<CodewastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodewastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodewastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
