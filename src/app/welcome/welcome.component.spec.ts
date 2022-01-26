import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from "../services/user-service.service";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userServiceStub: Partial<UserService>;
  let userService: UserService;
  let header: HTMLElement;

  beforeEach(async () => {
    userServiceStub = {
      isLoggedIn: true,
      user: {id: 1, name: 'Test User'}
    }
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [{provide: UserService, useValue: userServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should welcome Bubba', () => {
  //   userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
  //   fixture.detectChanges();
  //   expect(header.textContent).toContain('Bubba')
  // })

/*  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
  })*/
});
