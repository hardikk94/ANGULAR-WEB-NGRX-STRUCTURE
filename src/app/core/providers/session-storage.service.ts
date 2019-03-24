import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private _sessionKeyName;

  public get keyName() {
    return this._sessionKeyName
  }
  public set keyName(keyname: any) {
    this._sessionKeyName = keyname
  }


  private __sessionKeyvalue;

  public get keyValue() {
    return this.__sessionKeyvalue
  }

  public set keyValue(keyvalue: any) {
    this.__sessionKeyvalue = keyvalue
  }

  constructor() { }

  public setItem(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return sessionStorage.getItem(key)
  }

  public removeItem(key: string) {
    sessionStorage.removeItem(key)
  }

  public ClearAllItem() {
    sessionStorage.clear()
  }
}
