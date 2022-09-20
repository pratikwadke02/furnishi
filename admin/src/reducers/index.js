import {combineReducers} from 'redux';

import customerInfo from './customerInformation'
import customerReg from './customerRegistration'
import survey from './survey'
import workPartner from './workPartner'
import longService from './longServices'
import shortService from './shortServices'
import addOnService from './addOnService'
import workPartnerAddOnService from './workPartnerAddOnServices'
import workPartnerLongService from './workPartnerLongServices'
import workPartnerShortService from './workPartnerShortServices'

export const reducers = combineReducers({
    customerInfo,
    customerReg,
    survey,
    workPartner,
    longService,
    shortService,
    addOnService,
    workPartnerAddOnService,
    workPartnerLongService,
    workPartnerShortService
});