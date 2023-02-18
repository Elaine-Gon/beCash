import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionsTableComponent } from './transctions-table.component';

describe('TransctionsTableComponent', () => {
  let component: TransctionsTableComponent;
  let fixture: ComponentFixture<TransctionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransctionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransctionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
