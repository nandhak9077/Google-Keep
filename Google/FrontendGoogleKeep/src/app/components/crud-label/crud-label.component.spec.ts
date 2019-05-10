import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLabelComponent } from './crud-label.component';

describe('CrudLabelComponent', () => {
  let component: CrudLabelComponent;
  let fixture: ComponentFixture<CrudLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
