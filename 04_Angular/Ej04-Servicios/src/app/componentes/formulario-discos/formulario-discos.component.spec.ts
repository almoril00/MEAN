import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDiscosComponent } from './formulario-discos.component';

describe('FormularioDiscosComponent', () => {
  let component: FormularioDiscosComponent;
  let fixture: ComponentFixture<FormularioDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
