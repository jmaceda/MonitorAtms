import { Injectable }           from '@angular/core';
import { DOCUMENT }             from '@angular/common';
import { SOAPClient }           from './soapclient.js';
import { SOAPClientParameters } from './soapclient.js';

// Import BlockUI decorator & optional NgBlockUI type
//import { BlockUI, NgBlockUI }   from 'ng-block-ui';


@Injectable()
export class SoapService {

    // Decorator wires up blockUI instance
    //@BlockUI() blockUI: NgBlockUI;

    public soapParams: any;
    public soapClient: any;
    public url       : string = "";

    constructor() {

        if (window.location.port == '8687' || window.location.port == '3000' || window.location.port == '4200'){
            this.url = '/services/dataservices.asmx';  // Prod
        }else{
            this.url = '/dataservices.asmx';  //  QA
            //this.url = '/dataservices.asmx'; // Prod
        }

        console.log("SoapService.constructor:: ["+window.location.origin+"]  ["+window.location.port+"]   url["+this.url+"]");

        setTimeout(() => {
            //this.blockUI.stop(); // Stop blocking
        }, 2000);

    }


   post(url, action, params, fncCallBack, async){

       //url = '/dataservices.asmx';
       //this.blockUI.start('Loading...'); // Start blocking
        //console.log("SoapService.post:: url["+url+"]   this.url["+this.url+"]");
        this.soapParams = new SOAPClientParameters;
        this.soapClient = SOAPClient;


         return new Promise((resolve, reject) => {

                //Create SOAPClientParameters
                for(var param in params){
                    this.soapParams.add(param, params[param]);
                }
                //Create Callback
                var soapCallback = function (e, status) {
                    if (e == null || e.constructor.toString().indexOf("function Error()") != -1) {
                        //this.blockUI.stop(); // Stop blocking
                        reject("Unable to contat the server: " + status);
                    } else {

                        resolve(e);
                    }
                }

                if(fncCallBack != undefined && fncCallBack != ""){
                    soapCallback = fncCallBack;
                }

                //console.log("SoapService.post:: url["+url+"]   this.url["+this.url+"]");
                this.soapClient.invoke(this.url, action, this.soapParams, async, soapCallback);
             //this.blockUI.stop(); // Stop blocking
            });
    }
    setCredentials(username, password){
        this.soapClient.username = username;
        this.soapClient.password = password;
    }
}
