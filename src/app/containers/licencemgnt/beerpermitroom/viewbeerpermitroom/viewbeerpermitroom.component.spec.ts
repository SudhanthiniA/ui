import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbeerpermitroomComponent } from './viewbeerpermitroom.component';

describe('ViewbeerpermitroomComponent', () => {
  let component: ViewbeerpermitroomComponent;
  let fixture: ComponentFixture<ViewbeerpermitroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbeerpermitroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbeerpermitroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
