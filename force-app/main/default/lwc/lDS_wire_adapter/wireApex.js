import { LightningElement, api, wire } from "lwc";
import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContact';
export default class wireApexProperty extends LightningElement{
    @api recordId;
    handleButtonClick(){
    getRelatedContacts({recordId: this.recordId}).then(zontacts => {

    }).catch(error => {
        console.log('Érror: ', error);
    }) 
    }
}