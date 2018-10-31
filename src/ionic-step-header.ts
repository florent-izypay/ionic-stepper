import { Component, Input } from '@angular/core';
import { IonicStepStatus } from './ionic-step';

@Component({
  selector: 'ion-step-header',
  template: `
<div class="ionic-step-header-icon"
     [class.ionic-step-header-icon-error]="isError"
     [class.ionic-step-header-icon-success]="isSuccess"
     [class.ionic-step-header-icon-active]="active">
    <span class="ionic-step-header-icon-number" *ngIf="(icon === 'number' && status === ''); else ionIcon">{{index + 1}}</span>
    <ng-template #ionIcon><ion-icon [name]="computedIcon"></ion-icon></ng-template>
</div>
<div class="ionic-step-header-text-container" [class.mt]="description">
  <div class="ionic-step-header-label"
       [class.ionic-step-header-label-error]="isError"
       [class.ionic-step-header-label-success]="isSuccess"
       [class.ionic-step-header-label-active]="active">{{label}}</div>
  <div class="ionic-step-header-description"
       *ngIf="description"
       [class.ionic-step-header-description-error]="isError"
       [class.ionic-step-header-description-success]="isSuccess">
    <span>{{description}}</span>
  </div>
</div>
  `,
  host: {
    '[class.ionic-step-header-status-error]': 'isError',
    '[class.ionic-step-header-status-success]': 'isSuccess'
  }
})
export class IonicStepHeaderComponent {

  @Input() label: string;
  @Input() description: string;
  @Input() icon = 'number';
  @Input() errorIcon = 'close';
  @Input() successIcon = 'checkmark';
  @Input() index: number;
  @Input() active = false;
  @Input() status: IonicStepStatus = '';

  get computedIcon(): string {
    if (this.isError) {
      return this.errorIcon;
    }
    if (this.isSuccess) {
      return this.successIcon;
    }
    return this.icon;
  }
  get isError(): boolean { return this.status === 'error'; }
  get isSuccess(): boolean { return this.status === 'success'; }

}
