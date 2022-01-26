import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe("TestingService", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;
  let firstDependencyReturnValueSpy: jasmine.Spy<(index: number) => string>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });

    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    //возвращаемое значение по умолчанию
    firstDependencyReturnValueSpy = spyOn(firstDependency, 'returnValue').and.returnValue('two')
  });

  it('должен создать класс', () => {
    expect(service).toBeDefined()
  });

  // it('должен возвращать значение массива по указанному индексу', () => {
  //   // spyOn(firstDependency, 'returnValue').and.callThrough();
  //   // spyOn(firstDependency, 'returnValue').and.callFake(() => 'one');
  //   spyOn(firstDependency, 'returnValue').and.returnValue('one');
  //
  //   //spyOn - заменяет вызов настоящей зависимости на шпиона
  //   //callThrough() - производит вызов оригинальной функции
  //   //callFake() - ожидает функцию
  //   //returnValue() - если не нужен возврат функции, то можно вернуть значение
  //   const result = service.getValue(1);
  //   expect(result).toBe('one')
  // });


  // spyOn - этот метод должен существовать, чтобы использовать spyOn


//вызов оригинального метода случится
  it('должен возвращать значение массива по указанному индексу - оригинальный метод класса', () => {
    const result = service.getValue(1);
    expect(result).toBe('two')
  });
//вызов оригинального метода случится
  it('должен возвращать значение массива по указанному индексу - spyOn and callThrough', () => {
    firstDependencyReturnValueSpy.and.callThrough();
    const result = service.getValue(1);
    expect(result).toBe('two')
  });

//вызов оригинального метода не случится
  it('должен возвращать значение массива по указанному индексу - spyOn and returnValue', () => {
    const result = service.getValue(1);
    expect(result).toBe('two')
  });
//вызов оригинального метода не случится
  it('должен возвращать значение массива по указанному индексу - spyOn and callFake', () => {
    firstDependencyReturnValueSpy.and.callFake(() => 'three');
    const result = service.getValue(1);
    expect(result).toBe('three')
  });

  it('должен возвращать значение массива, возвращаемого функцией getIndex', () => {
    firstDependencyReturnValueSpy.and.returnValue('one')
    spyOn(service, 'getIndex').and.returnValue(0)
    const result = service.getValue(service.getIndex())
    expect(result).toBe('one')
  });

})
