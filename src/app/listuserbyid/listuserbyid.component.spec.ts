import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserbyidComponent } from './listuserbyid.component';

describe('ListuserbyidComponent', () => {
  let component: ListuserbyidComponent;
  let fixture: ComponentFixture<ListuserbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
