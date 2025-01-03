import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbrandhistoryComponent } from './listbrandhistory.component';

describe('ListbrandhistoryComponent', () => {
  let component: ListbrandhistoryComponent;
  let fixture: ComponentFixture<ListbrandhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbrandhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbrandhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
