import { Injectable } from '@angular/core';
import { ApiService } from './../../core/providers/api.service'
import { Observable } from 'rxjs';
import { ResponseState } from '../states/auth.state';

@Injectable()
export class AuthService {
  constructor(
    public apiService: ApiService
  ) { }
  public signIn(authData: any) {
    return this.apiService.post('user/auth/', authData).catch((ex) => {
      let errorResponse: ResponseState = {
        success: 0,
        message: '',
        data: {},
        error: ex
      }
      return Observable.of(errorResponse);
    })
  }
}



