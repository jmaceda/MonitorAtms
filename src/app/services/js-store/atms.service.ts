import { Injectable }     from '@angular/core';
import { CommonService }  from './common.service';
import { Instance }       from 'JsStore';
import { IPromise }       from 'q';
import { IAtm }           from '../../models/atm';

@Injectable()
export class AtmsService {
  _connection: Instance;

  constructor(service: CommonService) {
    this._connection = service._connection;
  }

  /*
  getAtms() {
    // jsstore returns promise, when you dont specify OnSuccess
    return this._connection.select({
      From: 'Atm'
    });
  }
*/
  addAtms(atm) {
    return this._connection.insert({
      Into: 'Atm',
      Values: [atm]
    });
  }

  deleteAtms(atmId) {
    return this._connection.remove({
      From: 'Atm',
      Where: {
        Id: atmId
      }
    });
  }

  updateAtms(atmId, updateValue) {
    return this._connection.update({
      In: 'Atm',
      Where: {
        Id: atmId
      },
      Set: updateValue
    });
  }

  /**
   *  Get Atms by atmId
   *
   * @param {any} atmId
   * @returns {Promise<IAtm>}
   * @memberof atmsService
   */
  getAtms(atmId): Promise<IAtm> {
    return this._connection.select({
      From: 'Atm',
      Where: {
        Id: atmId
      }
    });
  }

  /**
   * clear Atms table
   *
   * @returns {Promise<null>}
   * @memberof AtmsService
   */
  clearAtms(): Promise<null> {
    return this._connection.clear('Atm');
  }
}
