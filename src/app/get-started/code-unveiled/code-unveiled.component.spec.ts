import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUnveiledComponent } from './code-unveiled.component';

describe('CodeUnveiledComponent', () => {
  let component: CodeUnveiledComponent;
  let fixture: ComponentFixture<CodeUnveiledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeUnveiledComponent]
    });
    fixture = TestBed.createComponent(CodeUnveiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
