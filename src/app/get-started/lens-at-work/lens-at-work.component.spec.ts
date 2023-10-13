import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensAtWorkComponent } from './lens-at-work.component';

describe('LensAtWorkComponent', () => {
  let component: LensAtWorkComponent;
  let fixture: ComponentFixture<LensAtWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LensAtWorkComponent]
    });
    fixture = TestBed.createComponent(LensAtWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
