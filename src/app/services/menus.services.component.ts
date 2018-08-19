import { Injectable } from '@angular/core';
import { MENUS } from './menus-mocks';
@Injectable()
export class MenusService {
    getMenu(): Promise<any[]> {
        return Promise.resolve(MENUS);
    }
}
