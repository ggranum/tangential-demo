import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@tangential/authorization-service';
import {AuthInfo} from '@tangential/components';
import {MessageBus} from '@tangential/core';
import {AppRoutes} from '../../../app.routing.module';
import {NotificationMessage} from '../../common/notification-bar-component/notification';

@Component({
  selector: 'tanj-password-reset-page',
  template: `
    <tanj-page-body>
      <tanj-password-reset
        [preventSubmit]="true"
        [username]=""
        [requireEmailUsername]="true"
        (forgotPasswordEmailRequest)="onForgotPassword($event)"
        (showSignInRequest)="onShowSignInRequest()">
      </tanj-password-reset>
    </tanj-page-body>`,
  styles: [
      `
      tanj-password-reset-page tanj-password-reset {
        margin-top: 3em;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PasswordResetPage {

  @HostBinding('class.tanj-page-component') page = true;

  messageSent: boolean = false
  messageSendFailed: boolean = false

  constructor(private router: Router,
              private bus: MessageBus,
              private authService: AuthService) {
  }

  onShowSignInRequest() {
    this.router.navigate(AppRoutes.passwordReset.navTargets.absToSignIn())
  }

  onForgotPassword(authInfo: AuthInfo) {
    this.messageSent = false;
    this.messageSendFailed = false;
    this.authService.sendResetPasswordEmail(authInfo.username).then(() => {
      this.handleSuccess(authInfo)
    }).catch((e) => {
      this.messageSendFailed = true
    })
  }


  private handleSuccess(authInfo: AuthInfo) {
    this.messageSent = true
    this.bus.post(NotificationMessage.info({
      message: `Email Sent`,
      duration: 0 // forever.
    }))
    this.onShowSignInRequest()
  }
}

