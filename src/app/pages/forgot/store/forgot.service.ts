import { Injectable } from '@angular/core';
import { ApiService } from './../../../core/providers/api.service'
import { Observable } from 'rxjs';
import { ResponseState } from 'src/app/store/states/auth.state';

@Injectable()
export class ForgotService {
  constructor(
    public apiService: ApiService
  ) { }
  public forgotEmail(authData: any) {
    return this.apiService.post('user/auth/', authData).catch((ex) => {
      let error: ResponseState = {
        success: 0,
        message: ex,
        data: {},
        error: ex
      };
      return Observable.of(error)
    })
  }
}



