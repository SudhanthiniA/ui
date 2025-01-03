import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityviewsmaprequestComponent } from './entityviewsmaprequest.component';

describe('EntityviewsmaprequestComponent', () => {
  let component: EntityviewsmaprequestComponent;
  let fixture: ComponentFixture<EntityviewsmaprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityviewsmaprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityviewsmaprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
