import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupmasterComponent } from './addgroupmaster.component';

describe('AddgroupmasterComponent', () => {
  let component: AddgroupmasterComponent;
  let fixture: ComponentFixture<AddgroupmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgroupmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroupmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
