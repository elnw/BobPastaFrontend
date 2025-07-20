import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPastasTableComponent } from './list-pastas-table.component';

describe('ListPastasTableComponent', () => {
  let component: ListPastasTableComponent;
  let fixture: ComponentFixture<ListPastasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPastasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPastasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
