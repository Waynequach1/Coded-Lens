import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDiscoverComponent } from './generic-discover.component';

describe('GenericDiscoverComponent', () => {
  let component: GenericDiscoverComponent;
  let fixture: ComponentFixture<GenericDiscoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericDiscoverComponent]
    });
    fixture = TestBed.createComponent(GenericDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
