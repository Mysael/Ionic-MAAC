import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra2Page } from './obra2.page';

describe('Obra2Page', () => {
  let component: Obra2Page;
  let fixture: ComponentFixture<Obra2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obra2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
