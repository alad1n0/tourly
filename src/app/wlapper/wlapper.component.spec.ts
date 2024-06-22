import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlapperComponent } from './wlapper.component';

describe('WlapperComponent', () => {
  let component: WlapperComponent;
  let fixture: ComponentFixture<WlapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WlapperComponent]
    });
    fixture = TestBed.createComponent(WlapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
