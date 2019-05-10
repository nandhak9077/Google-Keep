import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTrashComponent } from './empty-trash.component';

describe('EmptyTrashComponent', () => {
  let component: EmptyTrashComponent;
  let fixture: ComponentFixture<EmptyTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
