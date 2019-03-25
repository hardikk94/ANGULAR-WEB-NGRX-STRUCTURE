import { Injectable } from '@angular/core';
import { ApiService } from './../../../core/providers/api.service'

@Injectable()
export class RegisterService {
  constructor(
    public apiService: ApiService
  ) { }
  public register(authData: any) {
    return this.apiService.post('user/auth/', authData)
  }
}



