import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFxqComponent } from './add-fxq.component';

describe('AddFxqComponent', () => {
  let component: AddFxqComponent;
  let fixture: ComponentFixture<AddFxqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFxqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFxqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
