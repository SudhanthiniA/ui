import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspiritpurchasepermitIdComponent } from './viewspiritpurchasepermit-id.component';

describe('ViewspiritpurchasepermitIdComponent', () => {
  let component: ViewspiritpurchasepermitIdComponent;
  let fixture: ComponentFixture<ViewspiritpurchasepermitIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspiritpurchasepermitIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspiritpurchasepermitIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
