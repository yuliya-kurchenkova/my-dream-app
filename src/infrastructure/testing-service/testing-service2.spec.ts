import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe("TestingService Version 2", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  const fakeDependencyService = {
    returnValue: jasmine.createSpy('returnValue'),
    //этот метод ля не существующих методов в отличие от простого spyOn
    initValue: jasmine.createSpy('initValue'),
    initValue2: jasmine.createSpy('initValue2')
  }

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



})
