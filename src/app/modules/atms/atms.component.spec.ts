/* tslint:disable:no-unused-variable */
import { async }                from '@angular/core/testing';
import { ComponentFixture }     from '@angular/core/testing';
import { TestBed }              from '@angular/core/testing';
import { By }                   from '@angular/platform-browser';
import { DebugElement }         from '@angular/core';

import { AtmsInitComponent }        from './atms.component';

describe('AtmsComponent', () => {
  let component: AtmsInitComponent;
  let fixture  : ComponentFixture<AtmsInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(AtmsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
