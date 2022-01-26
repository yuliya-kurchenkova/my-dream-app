import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {FormsModule} from "@angular/forms";

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // упадёт тест
      declarations: [ DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display value from input in span', () => {
    const hostElement = fixture.nativeElement;
    const input: HTMLInputElement = hostElement.querySelector('input');
    const span: HTMLElement = hostElement.querySelector('span');

    input.value = 'Some value';

    input.dispatchEvent(new Event('input'));
    // фальшивая генерация эвента, чтобы работала привязка данных и после этого опять
    //задетектить ваши изменения в компоненте
    fixture.detectChanges();

    expect(span.textContent).toBe('Some value')
  });
});
