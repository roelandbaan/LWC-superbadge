import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts'
const COLUMNS = [
    {name: 'FirstName', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text' },
    {name: 'LastName', fieldName: LASTNAME_FIELD.fieldApiName , type: 'text' },
    {name: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement {
columns = COLUMNS;
@wire(getContacts)
contacts;
get errors() {
    return(this.contacts.error)? reduceErrors(this.contacts.error):[];
}
}