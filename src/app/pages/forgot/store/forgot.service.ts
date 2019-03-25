import { Injectable } from '@angular/core';
import { ApiService } from './../../../core/providers/api.service'

@Injectable()
export class ForgotService {
  constructor(
    public apiService: ApiService
  ) { }
  public forgotEmail(authData: any) {
    return this.apiService.post('user/auth/', authData)
  }
}



