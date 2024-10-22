import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponentComponent } from './contact-list-component.component';

describe('ContactListComponentComponent', () => {
  let component: ContactListComponentComponent;
  let fixture: ComponentFixture<ContactListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
