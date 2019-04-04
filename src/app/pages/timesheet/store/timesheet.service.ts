import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/providers/api.service'
import { Observable } from 'rxjs';
import { ResponseState } from '../../../store/states/auth.state';

@Injectable()
export class TimesheetService {
  constructor(
    public apiService: ApiService
  ) { }
  public saveTimesheet(data: any) {
    return this.apiService.post('', data).catch((ex) => {
      let errorResponse: ResponseState = {
        success: 0,
        message: ex,
        data: {},
        error: ex
      }
      return Observable.of(errorResponse)
    })
  }
}



