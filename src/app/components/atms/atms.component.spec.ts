/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtmsComponent } from './atms.component';

describe('AtmsComponent', () => {
  let component: AtmsComponent;
  let fixture  : ComponentFixture<AtmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(AtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
