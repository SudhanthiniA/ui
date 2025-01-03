import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagmentService, AuthService, AlertService } from '@app/services';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasEl', { static: true }) canvasEl: ElementRef<HTMLCanvasElement>;
  @ViewChild('closebutton', { static: false }) closebutton;
  loginform: FormGroup;
  businessResetform: FormGroup;
  cusResetOTPform: FormGroup;
  cusResetform: FormGroup;
  formsubmitted: any = false;
  captchaValue = this.makeid(4);
  captchaMatch = false;
  showPass = false;
  errorFlag = false;
  private context: CanvasRenderingContext2D;
  isResetEmailRespErr = false;
  isOtpRespErr = false;
  counter = 0;
  resetOTPBtnState = 'disabled';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alert: AlertService,
    private userManageService: UserManagmentService
  ) { }

  ngOnInit() {
    this.authService.removeUserMenus();
    this.createLoginFormControl();
    // this.createBusinessResetformControl();
    this.createCusResetOTPformControl();
    this.createCusResetformControl();
  }

  startCountdown(seconds) {
    this.counter = seconds;

    const interval = setInterval(() => {
      // console.log(this.counter);
      this.counter--;

      if (this.counter === 30) {
        this.resetOTPBtnState = '';
      }

      if (this.counter < 0) {
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }

  createLoginFormControl() {
    this.loginform = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
      captchatext: ['', Validators.required]
    });
  }

  createBusinessResetformControl() {
    this.businessResetform = this.fb.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  createCusResetOTPformControl() {
    this.cusResetOTPform = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  createCusResetformControl() {
    this.cusResetform = this.fb.group({
      otpCode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    });
  }

  async onGenerateOTP() {
    const form = this.cusResetOTPform;
    this.formsubmitted = true;
    console.log('onGenerateOTP::', form);

    if (form.valid) {
      const { emailId } = form.value;
      console.log('cusResetOTPform::', form);
      const otpRes: any = await this.authService.generateOTP(emailId);
      console.log('otpRes::', otpRes);
      if (otpRes.responseCode === 200) {
        this.alert.showSuccess(otpRes.responseMessage, 'Success');
        this.startCountdown(60);
        this.resetOTPBtnState = 'disabled';
      } else {
        this.alert.showError(otpRes.responseMessage, 'error');
        this.isResetEmailRespErr = true;
      }
    }
  }

  async onReGenerateOTP() {
    await this.onGenerateOTP();
  }

  async onResetPassWithOTP() {
    const form = this.cusResetform;
    this.formsubmitted = true;
    console.log('onResetPassWithOTP::', form);

    if (this.isResetEmailRespErr) {
      this.alert.showError('Please validate OTP.', 'error');
      return;
    }

    if (form.valid) {
      const { otpCode: token, password, confirm_password: confirmPassword } = form.value;
      const payload = { token, password, confirmPassword };
      console.log('cusResetform::', form);
      const resetPassOTPRes: any = await this.authService.passwordReset(payload);
      console.log('resetPassOTPRes::', resetPassOTPRes);
      if (resetPassOTPRes.responseCode === 200) {
        this.alert.showSuccess(resetPassOTPRes.responseMessage, 'Success');
        this.cusResetOTPform.reset();
        this.cusResetform.reset();
        this.closebutton.nativeElement.click();
      } else {
        this.alert.showError(resetPassOTPRes.responseMessage, 'error');
        this.isResetEmailRespErr = true;
      }
    }
  }

  onTogglePass(val) {
    this.showPass = val;
  }

  onLogin() {
    const form = this.loginform;
    this.formsubmitted = true;

    if (form.valid) {
      // console.log(this.captchaValue);
      // console.log(form.value.captchatext);
      if (this.captchaValue !== form.value.captchatext) {
        this.captchaMatch = true;
        return;
      }

      if (this.captchaValue === form.value.captchatext) {
        this.captchaMatch = false;
        this.formsubmitted = false;
        const { mail, password } = form.value;
        const user = { userName: mail, password };

        this.authService.login(user).subscribe((resp: any) => {
          console.log(resp);
          const { userId: respUserId } = resp;
          if (resp && respUserId) {
            // this.getCustomerMenu();
            this.getUserMenu();
          } else {
            this.errorFlag = true;
          }
        });

      }
    }
  }

  businessLogin() {

  }

  onBusinessReset() {

  }

  getUserMenu() {
    let resflag = false;
    let finalLandingUrl = '/dashboard/analytics';
    this.userManageService.getMenuByUserId().subscribe(
      (resp: any) => {
        console.log('userMenu Resp::', resp);
        if (resp.content) {
          resflag = true;
          const { menuList, landingUrl } = resp.content;
          console.log('menuList::', menuList);
          const length = Object.keys(menuList).length;
          if (length === 1) {
            //const { children: menusJson } = menuList[0];
            // const { children: menusJson } = menuList;
            this.authService.setUserMenus(menuList);
          } else {
            this.authService.setUserMenus(menuList);
          }
          finalLandingUrl = (landingUrl !== '') ? landingUrl : finalLandingUrl;
        }
        this.router.navigate([finalLandingUrl]);
      },
      (err: any) => {
        console.log('userMenu Err::', err);
      }
    );

    setTimeout(function () {
      if (resflag === false) {
        this.router.navigate([finalLandingUrl]);
      }
    }, 500);

  }

  getCustomerMenu() {
    let resflag = false;
    let finalLandingUrl = '/dashboard/analytics';
    this.userManageService.getMenuForCustomer().subscribe(
      (resp: any) => {
        console.log('getCustomerMenu Resp::', resp);
        if (resp.data) {
          resflag = true;
          const { menuList, landingUrl } = resp.data;
          // const menuList = resp.data;
          console.log('menuList::', menuList);
          const length = Object.keys(menuList).length;
          if (length === 1) {
            const { children: menusJson } = menuList[0];
            this.authService.setUserMenus(menusJson);
          } else {
            this.authService.setUserMenus(menuList);
          }
          finalLandingUrl = (landingUrl !== '') ? landingUrl : finalLandingUrl;
        }
        this.router.navigate([finalLandingUrl]);
      },
      (err: any) => {
        console.log('CustomerMenu Err::', err);
      }
    );

    setTimeout(function () {
      if (resflag === false) {
        this.router.navigate([finalLandingUrl]);
      }
    }, 500);

  }

  testLogin(testLogin) {
    // tslint:disable-next-line: max-line-length
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo1MjIsXCJlbnRpdHlJZFwiOjIsXCJ1c2VyTmFtZVwiOlwicmV0YWlsXCIsXCJlbnRpdHlUeXBlXCI6XCJTVUdBUl9NSUxMXCJ9IiwiZXhwIjoxNjE1OTA5ODY4LCJpYXQiOjE2MTU4OTE4Njh9.VNiZTvZRhgBWe6M7NpPV2YaGHHQIrF6Q9JchkLS2Ue87bnXrK8EBc1p1YcCs2WX3SN-oEc2ZYWOeppf4eJDxnA';
    localStorage.setItem('JWT_TOKEN', token);
    localStorage.setItem('REFRESH_TOKEN', token);
    localStorage.setItem('USER_NAME', 'retail');
    localStorage.setItem('USER_ID', '522');
    localStorage.setItem('LOGIN_TIME', '2021-03-16T10:51:08.000+0000');
    localStorage.setItem('LOGIN_REMOTE_IP', '65.0.150.210');
    localStorage.setItem('EntityType', 'SUGAR_MILL')
    // const menuListNew = 
    //   this.authService.setUserMenus(menuListNew);
    this.router.navigate(['/dashboard/analytics']);
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.draw();
  }

  draw() {
    this.context.font = 'italic 600 30px Courier New';
    this.context.globalAlpha = 0.2;
    this.context.fillStyle = 'blue';
    this.context.fillRect(0, 0, 240, 50);
    this.context.strokeStyle = '#ffffff';
    this.context.strokeText(this.captchaValue, 80, 32);
    this.context.fillStyle = '#000000';
    this.context.fillText(this.captchaValue, 80, 30);
  }

  makeid(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  refreshCaptcha() {
    this.captchaValue = this.makeid(4);
    this.context.clearRect(0, 0, 240, 50);
    this.draw();
  }

}
