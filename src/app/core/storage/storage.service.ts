import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from './storage.constants';
import { StorageType } from './storage.enum';

@Injectable()
export class StorageService {
    constructor() {}

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
    public getValueFromStorage<T>(storageType: StorageType, key: string): T {
        if (storageType === StorageType.LocalStorage) {
            const storedValue = localStorage.getItem(key) as string;
            return JSON.parse(storedValue) as T;
        } else {
            const storedValue = sessionStorage.getItem(key) as string;
            return JSON.parse(storedValue) as T;
        }
    }

    /**
     * clear straoge values based on type
     *
     * @param {StorageType} storageType
     * @memberof StorageService
     */
    public clear(storageType: StorageType) {
        if (storageType === StorageType.LocalStorage) {
            localStorage.removeItem(STORAGE_KEYS.UserId);
            localStorage.removeItem(STORAGE_KEYS.AuthToken);
            localStorage.clear();
        } else {
            sessionStorage.clear();
        }
    }
}
