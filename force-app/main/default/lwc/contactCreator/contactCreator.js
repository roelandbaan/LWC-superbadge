import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_FIELD_FIRSTNAME from '@salesforce/schema/Contact.FirstName'
import CONTACT_FIELD_LASTNAME from '@salesforce/schema/Contact.LastName'
import CONTACT_FIELD_EMAIL from '@salesforce/schema/Contact.Email'

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [CONTACT_FIELD_FIRSTNAME, CONTACT_FIELD_LASTNAME, CONTACT_FIELD_EMAIL];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
                        title: 'Contact created',
                        message: 'RecordId: ' + event.detail.id
        });
        this.dispatchEvent(toastEvent);
    }
}