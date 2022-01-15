import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
                { label: 'Annual revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
                { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
                { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' }];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
    get errors() {
        return(this.accounts.error)? reduceErrors(this.accounts.error):[];
    }
}