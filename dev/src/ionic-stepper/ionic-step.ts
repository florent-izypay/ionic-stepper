import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

export type IonicStepStatus = ('' | 'error' | 'success');

@Component({
    selector: 'ion-step',
    template: `
        <ng-template><ng-content></ng-content></ng-template>
    `
})
export class IonicStepComponent {
    index: number;

    @Input() disabled: boolean;
    @Input() label: string;
    @Input() description: string;
    @Input() icon = 'number';
    @Input() errorIcon = 'close';
    @Input() successIcon = 'checkmark';
    @Input() status: IonicStepStatus = '';

    @ViewChild(TemplateRef) content: TemplateRef<any>;
}
