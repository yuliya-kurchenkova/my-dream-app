import {SimpleService} from "./simple.service";
import {CheckValueService} from "./check-value.service";
import {TestBed} from "@angular/core/testing";

describe('Простой сервис', () => {
  let service: SimpleService;
  const fakeCheckValueService = { check: () => true }

  beforeEach(() => { // эта функция запускается перед выполнением каждого теста и в неё помещается разные функции, которые выполняются не один раз
    // service = new SimpleService(fakeCheckValueService as CheckValueService) //теперь перепишем с утилитой testBed
    //testBed - это тестовая утилита ангуляр, которая создаёт нам окружение для работы наших тестов, по сути это мок модуль, точно такойже как и Ангуляр модуль
    //без этой утилиты тесты работают быстрее, в случае, когда мы не тестируем класс, а тестируем какой-то ряд функций, то эта утилита не пригодится
    TestBed.configureTestingModule( {
      providers: [
        SimpleService, // мы оставляем как есть, потому что мы его тестируем
        { provide: CheckValueService, useValue: fakeCheckValueService } // а туту мы подсовываем мок
      ]
    })

    service = TestBed.inject(SimpleService) // можно вместо inject - get(это в старой версии) - получаем экземпляр класса SimpleService
  })

  it('должен создать экземпляр класса', () => {
    // const service = new SimpleService(); //надо проэцинилизировать наш класс
    expect(service).toBeTruthy();
  });

  it('должен суммировать 2 числа', () => {
    // const service = new SimpleService();
    const sum = service.sum(1, 2);
    expect(sum).toBe(3)
  });

  it('должен возвращать undefined, если второго аргумента нет', () => {
    const sum = service.sum(1);
    expect(sum).toBeUndefined()
  });

  it('должен возвращать 22, если первого аргумента нет', () => {
    const sum = service.sum(undefined, 2);
    expect(sum).toBe(22)
  });


  //xit - если нам надо отключить на время тест и потом в нём разобраться, подсвечивается жёлтым
  //fit - если только его смотреть

  it('должен проверять значение', () => {
    const value = service.check();
    expect(value).toBeTruthy()
  });

})
