import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra4Page } from './obra4.page';

describe('Obra4Page', () => {
  let component: Obra4Page;
  let fixture: ComponentFixture<Obra4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obra4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obra4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
