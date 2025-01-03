import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedimportpermitsComponent } from './receivedimportpermits.component';

describe('ReceivedimportpermitsComponent', () => {
  let component: ReceivedimportpermitsComponent;
  let fixture: ComponentFixture<ReceivedimportpermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedimportpermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedimportpermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
