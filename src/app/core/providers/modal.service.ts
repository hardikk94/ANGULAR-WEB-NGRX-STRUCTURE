import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public openModal(componentname, title, message,size = "lg") {
    const modalRef = this.modalService.open(componentname, { size: 'lg' });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    const instance = (modalRef as any)._windowCmptRef.instance;
    setTimeout(() => {
      instance.windowClass += ' animate-end ';
    }, 250)
    return modalRef
  }
}


