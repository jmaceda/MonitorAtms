export class IAtm {
    Area: string;
    Brand: string;
    CassetteAmount: string;
    City: string;
    CriticalPeriod: number;
    Description: string;
    DeviceStatus: string;
    HopperAmount: string;
    Id: number;
    Ip: string;
    IsOnline: boolean;
    IsoAddress: string;
    IsoLocation: string;
    Model: string;
    Name: string;
    OfflineDevices: object;
    OnlineDevices: object;
    OperatingSystem: string;
    PaperStatus: string;
    SerialNumber: string;
    ServiceDate: number;
    State: string;
    ZipCode: string ;
    LastDetails: object;
    CassettesStatus: string;
    HoppersStatus: string;
    IsInMaintenanceMode: boolean;
    LastDetailsTimestamps: object;
    CassettesStatusTimestamp: number;
    HoppersStatusTimestamp: number;
    MaintenanceModeTimestamp: number;
    SafeOpen: boolean;
    CabinetOpen: boolean;
    SafeOpenTs: number;
    CabinetOpenTs: number;
    RetractStatus: object;
    RetractStatusTimestamp: number;
    RejectStatus: string;
    RejectStatusTimestamp: number;
    Money: number;
    AtmStartHour: number;
    AtmStartMinute: number;
    AtmEndHour: number;
    AtmEndMinute: number;
    WorkingDays: number;
    LastIOnlineTimestamp: number;
    AddressStreet: string;
    AddressNumber: string;
    Latitude: number;
    Longitude: number;
    Locality: string;
    LocalityKey: string;
    CityKey: string;
    StateKey: string;
    CreationDate: string;
}

export class Atm implements IAtm {
    Area: string = "";
    Brand: string = "";
    CassetteAmount: string = "";
    City: string = "";
    CriticalPeriod: number = 0;
    Description: string = "";
    DeviceStatus: string = "";
    HopperAmount: string = "";
    Id: number = 0;
    Ip: string = "";
    IsOnline: boolean = true;
    IsoAddress: string = "";
    IsoLocation: string = "";
    Model: string = "";
    Name: string = "";
    OfflineDevices: object = [];
    OnlineDevices: object = [];   /* Este campo contiene un arreglo */
    OperatingSystem: string = "";
    PaperStatus: string = "";
    SerialNumber: string = "";
    ServiceDate: number = 0;
    State: string = "";
    ZipCode: string = "";
    LastDetails: object = [];
    CassettesStatus: string = "";    /* Este campo contiene un arreglo */
    HoppersStatus: string = "";    /* Este campo contiene un arreglo */
    IsInMaintenanceMode: boolean = true;	/* Verificar tipo de dato, este es booleano */
    LastDetailsTimestamps: object = [];
    CassettesStatusTimestamp: number = 0;
    HoppersStatusTimestamp: number = 0;
    MaintenanceModeTimestamp: number = 0;
    SafeOpen: boolean = true; 	/* Verificar tipo de dato, este es booleano */
    CabinetOpen: boolean = true; 	/* Verificar tipo de dato, este es booleano */
    SafeOpenTs: number = 0;
    CabinetOpenTs: number = 0;
    RetractStatus: object = [];   /* Este campo contiene un arreglo */
    RetractStatusTimestamp: number = 0;
    RejectStatus: string = "";   /* Este campo contiene un arreglo */
    RejectStatusTimestamp: number = 0;
    Money: number = 0;
    AtmStartHour: number = 0;
    AtmStartMinute: number = 0;
    AtmEndHour: number = 0;
    AtmEndMinute: number = 0;
    WorkingDays: number = 0;
    LastIOnlineTimestamp: number = 0;
    AddressStreet: string = "";
    AddressNumber: string = "";
    Latitude: number = 0;
    Longitude: number = 0;
    Locality: string = "";
    LocalityKey: string = "";
    CityKey: string = "";
    StateKey: string = "";
    CreationDate: string = "";
}

