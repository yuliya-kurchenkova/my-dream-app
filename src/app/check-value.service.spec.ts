import {CheckValueService} from "./check-value.service";
import {TestBed} from "@angular/core/testing";

describe('Сервис проверки значения', () => {
  let service: CheckValueService;

  beforeEach(() => {
    TestBed.configureTestingModule( {
      providers: [
        CheckValueService,
      ]
    })

    service = TestBed.inject(CheckValueService)
  })

  it('должен создать экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('должен проверять значение', () => {
    const value = service.check()
    expect(value).toBeTruthy();
  });

})
