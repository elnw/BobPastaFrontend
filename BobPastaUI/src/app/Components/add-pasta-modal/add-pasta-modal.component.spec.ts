import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPastaModalComponent } from './add-pasta-modal.component';

describe('AddPastaModalComponent', () => {
  let component: AddPastaModalComponent;
  let fixture: ComponentFixture<AddPastaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPastaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPastaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
