import { Injectable }           from '@angular/core';

import { Instance }             from 'JsStore';
import { IDataBaseOption }      from 'JsStore';
import { ITableOption }         from 'JsStore';

declare var JsStore;

@Injectable()
export class CommonService {
  _connection: Instance;
  _dbName = 'MonitorAtms';
  constructor() {
    this._connection = new JsStore.Instance();
    JsStore.isDbExist(this._dbName as any).then(isExist => {
      if (isExist) {
        this._connection.openDb(this._dbName);
      }
      else {
        const DataBase = this.getDatabase();
        this._connection.createDb(DataBase);
      }
    }).catch(err => {
      // this will be fired when indexedDB is not supported.
      console.error(err);
      alert(err._message);
    });
  }

  private colsTblAtm:any = [
    {
      Name: 'Area',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'Brand',
      DataType: JsStore.Data_Type.String,
    },
    {
      Name: 'CassetteAmount',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'City',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'CriticalPeriod',
      DataType: JsStore.Data_Type.Number,
      Default: 0
    },
    {
      Name: 'Description',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'DeviceStatus',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'HopperAmount',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'Id',
      PrimaryKey: true,
      AutoIncrement: false
    },
    {
      Name: 'Ip',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'IsOnline',
      DataType: JsStore.Data_Type.Boolean
    },
    {
      Name: 'IsoAddress',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'IsoLocation',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'Model',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'Name',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'OfflineDevices',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'OnlineDevices',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'OperatingSystem',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'PaperStatus',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'SerialNumber',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'ServiceDate',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'State',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'ZipCode',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'LastDetails',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'CassettesStatus',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'HoppersStatus',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'IsInMaintenanceMode',
      NotNull: true,
      DataType: JsStore.Data_Type.Boolean
    },
    {
      Name: 'LastDetailsTimestamps',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'CassettesStatusTimestamp',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'MaintenanceModeTimestamp',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'SafeOpen',
      NotNull: true,
      DataType: JsStore.Data_Type.Boolean
    },
    {
      Name: 'CabinetOpen',
      NotNull: true,
      DataType: JsStore.Data_Type.Boolean
    },
    {
      Name: 'SafeOpenTs',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'CabinetOpenTs',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'RetractStatus',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'RetractStatusTimestamp',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'RejectStatus',
      NotNull: true,
      DataType: JsStore.Data_Type.Array
    },
    {
      Name: 'RejectStatusTimestamp',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'Money',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'AtmStartHour',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'AtmStartMinute',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'AtmEndHour',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'AtmEndMinute',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'WorkingDays',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'LastIOnlineTimestamp',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'AddressStreet',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'AddressNumber',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'Latitude',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'Longitude',
      NotNull: true,
      DataType: JsStore.Data_Type.Number
    },
    {
      Name: 'Locality',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'LocalityKey',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'CityKey',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'StateKey',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    },
    {
      Name: 'CreationDate',
      NotNull: true,
      DataType: JsStore.Data_Type.String
    }
  ];

  private getDatabase() {

    const TblAtms = {
      Name: 'Atm',
      Columns: this.colsTblAtm
    } as ITableOption;

    const DataBase = {
      Name: this._dbName,
      Tables: [TblAtms]
    } as IDataBaseOption;

    return DataBase as any;
  }

}
