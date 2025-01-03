import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpreprationofflclblendComponent } from './addpreprationofflclblend.component';

describe('AddpreprationofflclblendComponent', () => {
  let component: AddpreprationofflclblendComponent;
  let fixture: ComponentFixture<AddpreprationofflclblendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpreprationofflclblendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpreprationofflclblendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
