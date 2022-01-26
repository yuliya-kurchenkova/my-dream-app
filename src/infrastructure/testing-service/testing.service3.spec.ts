import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe("TestingService Version 3", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  const fakeDependencyService = jasmine.createSpyObj(['initValue', 'returnValue', 'initValue2', 'initValue3'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService,
        {provide: FirstDependencyService, useValue: fakeDependencyService}
      ]
    });

    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    fakeDependencyService.returnValue.and.returnValue("two")
    //если нужен дефолтное значение, то лучше туту это делать
    fakeDependencyService.initValue2.calls.reset(); // это и есть сброс
  });


  it('должен возвращать значение массива по указанному индексу', () => {
    const result = service.getValue(1);
    expect(result).toBe('two')
  });

  it('должен возвращать значение массива по указанному индексу 0', () => {
    fakeDependencyService.returnValue.and.returnValue('one')
    const result = service.getValue(1);
    expect(result).toBe('one')
  });


  it('метод sayHi() должен вызвать метод зависимости initValue2', () => {
    service.sayHi()
    expect(fakeDependencyService.initValue2).toHaveBeenCalled(); //если наш метод ничего не возвращает
    expect(fakeDependencyService.initValue2).toHaveBeenCalledTimes(1);
    //вызовы шпионов накапливаются, то нужно их сбрасывать, перед проверкой колличества вызовов методов
    //или даже если мы просто будем спрашивать вызывался или нет
  })

  it('метод sayHi() должен вызвать метод зависимости initValue3', () => {
    service.sayHi2("some text")
    expect(fakeDependencyService.initValue3).toHaveBeenCalled(); //если наш метод ничего не возвращает
    expect(fakeDependencyService.initValue3).toHaveBeenCalledTimes(1);
    expect(fakeDependencyService.initValue3).toHaveBeenCalledWith('some text')
  })

})
