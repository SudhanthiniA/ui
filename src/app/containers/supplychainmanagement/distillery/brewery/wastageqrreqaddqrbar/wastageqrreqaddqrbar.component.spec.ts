import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastageqrreqaddqrbarComponent } from './wastageqrreqaddqrbar.component';

describe('WastageqrreqaddqrbarComponent', () => {
  let component: WastageqrreqaddqrbarComponent;
  let fixture: ComponentFixture<WastageqrreqaddqrbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastageqrreqaddqrbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastageqrreqaddqrbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
