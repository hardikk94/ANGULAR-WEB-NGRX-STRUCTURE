import { Injectable } from '@angular/core';
import { ApiService } from './../../core/providers/api.service'

@Injectable()
export class AuthService {
  constructor(
    public apiService: ApiService
  ) { }
  public signIn(authData: any) {
    return this.apiService.post('user/auth/', authData)
  }
}



