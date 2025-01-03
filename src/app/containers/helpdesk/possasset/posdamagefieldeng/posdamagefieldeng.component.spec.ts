import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosdamagefieldengComponent } from './posdamagefieldeng.component';

describe('PosdamagefieldengComponent', () => {
  let component: PosdamagefieldengComponent;
  let fixture: ComponentFixture<PosdamagefieldengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosdamagefieldengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosdamagefieldengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
