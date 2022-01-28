import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOneComponent } from './data-one.component';

describe('DataOneComponent', () => {
  let component: DataOneComponent;
  let fixture: ComponentFixture<DataOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
