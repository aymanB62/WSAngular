import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditComponentComponent } from './contact-edit-component.component';

describe('ContactEditComponentComponent', () => {
  let component: ContactEditComponentComponent;
  let fixture: ComponentFixture<ContactEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
