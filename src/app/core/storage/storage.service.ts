import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from './storage.constants';
import { StorageType } from './storage.enum';

@Injectable()
export class StorageService {
  constructor() { }

  /**
   *store values into session/local storage
   *
   * @param {StorageType} storageType
   * @param {string} key
   * @param {*} value
   * @memberof StorageService
   */
  public storeValue(storageType: StorageType, key: string, value: any): void {
    if (storageType === StorageType.LocalStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   *retrive storage value from session/local storage
   *
   * @param {StorageType} storageType
   * @param {string} key
   * @return {*}  {*}
   * @memberof StorageService
   */
  public getValueFromStorage(storageType: StorageType, key: string): any {
    if (storageType === StorageType.LocalStorage) {
      // return localStorage.JSON.parse(localStorage.getItem(key));
      return localStorage.getItem(key);
    } else {
      return sessionStorage.getItem(key);
    }
  }

  public clear(storageType: StorageType) {
    if (storageType === StorageType.LocalStorage) {
      localStorage.removeItem(STORAGE_KEYS.ID);
      localStorage.removeItem(STORAGE_KEYS.AuthToken);
      localStorage.clear();
    } else {
      sessionStorage.clear();
    }
  }
}
