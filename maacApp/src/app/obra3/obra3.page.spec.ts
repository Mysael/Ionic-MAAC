import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra3Page } from './obra3.page';

describe('Obra3Page', () => {
  let component: Obra3Page;
  let fixture: ComponentFixture<Obra3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obra3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obra3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
