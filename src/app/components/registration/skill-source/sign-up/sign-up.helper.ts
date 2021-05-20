import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import { StorageType } from 'src/app/core/storage/storage.enum';
import { StorageService } from 'src/app/core/storage/storage.service';
import { SkillSourceRegistrationRequest } from 'src/app/interface';

export const getStoredFormData = (storageService: StorageService): SkillSourceRegistrationRequest => {
    return storageService.getValueFromStorage<SkillSourceRegistrationRequest>(StorageType.SessionStorage, STORAGE_KEYS.FormSession);
};
