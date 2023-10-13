import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplicationsComponent } from './implications.component';

describe('ImplicationsComponent', () => {
  let component: ImplicationsComponent;
  let fixture: ComponentFixture<ImplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImplicationsComponent]
    });
    fixture = TestBed.createComponent(ImplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
