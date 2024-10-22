import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponentComponent } from './contact-details-component.component';

describe('ContactDetailsComponentComponent', () => {
  let component: ContactDetailsComponentComponent;
  let fixture: ComponentFixture<ContactDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
