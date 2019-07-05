import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrapagePage } from './extrapage.page';

describe('ExtrapagePage', () => {
  let component: ExtrapagePage;
  let fixture: ComponentFixture<ExtrapagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrapagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrapagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
