import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public toastOptions: any = {
    closeButton: true,
    progressBar: true,
    progressAnimation: "increasing",
    maxOpened: 3

  }
  constructor(public toastrService: ToastrService) { }

  public showToastMessage(type, title, message, positionClass = 'toast-bottom-right', timeOut = 5000) {
    this.toastOptions.positionClass = positionClass;
    this.toastOptions.timeOut = timeOut
    switch (type) {
      case 'success': {
        this.toastrService.success(title, message, this.toastOptions)
        break;
      }

      case 'info': {
        this.toastrService.info(title, message, this.toastOptions)
        break;
      }

      case 'error': {
        this.toastrService.error(title, message, this.toastOptions)
        break;
      }

      case 'warning': {
        this.toastrService.warning(title, message, this.toastOptions)
        break;
      }

      default: {
        this.toastrService.info(title, message, this.toastOptions)
        break;
      }
    }
  }
}


