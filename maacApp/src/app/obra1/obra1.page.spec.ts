import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra1Page } from './obra1.page';

describe('Obra1Page', () => {
  let component: Obra1Page;
  let fixture: ComponentFixture<Obra1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obra1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obra1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
