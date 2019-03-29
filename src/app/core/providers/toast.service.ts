import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public toastOptions: any = {
    closeButton: true,
    progressBar: false,
    progressAnimation: "increasing",
    titleClass:"toast-title",
    messageClass:"toast-message",
    maxOpened: 3
  }
  constructor(public toastrService: ToastrService) { }

  public showToastMessage(type, title, message, positionClass = 'toast-top-right', timeOut = 5000) {    
    this.toastOptions.positionClass = positionClass;
    this.toastOptions.timeOut = timeOut
    switch (type) {
      case 'success': {
        this.toastrService.success(message,title, this.toastOptions)        
        break;
      }

      case 'info': {
        this.toastrService.info(message,title,this.toastOptions)
        break;
      }

      case 'error': {
        this.toastrService.error(message,title,this.toastOptions)
        break;
      }

      case 'warning': {
        this.toastrService.warning(message,title,this.toastOptions)
        break;
      }

      default: {
        this.toastrService.info(message,title,this.toastOptions)
        break;
      }
    }
  }
}


