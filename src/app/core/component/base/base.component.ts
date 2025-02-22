import { Subject } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-base',
  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  protected destroy$ = new Subject<void>();

  protected constructor(private messageService: MessageService) {}

  /*
   * The handleError() method is used to handle errors in the
   */
  protected handleError(error: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: error.message || 'Có lỗi xảy ra!',
    });
  }

  /*
   * The ngOnDestroy() method is called when the component is destroyed.
   * It calls the next() method of the destroy$ Subject to emit a value.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
