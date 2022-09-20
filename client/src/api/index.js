import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:8080/api/wsb'
});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer $(JSON.parse(localStorage.getItem('profile')).token)`;
    }
    return req;
} , (error) => {
    return Promise.reject(error);
} );

export const addCustomerInfo = (customerInfo) => API.post('/addCustomerInfo', customerInfo );
export const getCustomerInfo = () => API.get('/getCustomerInfo');

export const addCustomerReg = (customerReg) => API.post('/addCustomerReg', customerReg );
export const getCustomerReg = () => API.get('/getCustomerReg');

export const addSurvey = (survey) => API.post('/addSurvey', survey );
export const getSurvey = () => API.get('/getSurvey');

export const addWorkPartner = (workPartner) => API.post('/addWorkPartner', workPartner );
export const getWorkPartner = () => API.get('/getWorkPartner');

export const getLongServices = () => API.get('/getLongServices');
export const updateLongServices = (longServices) => API.put('/updateLongServices', longServices );

export const getShortServices = () => API.get('/getShortServices');
export const updateShortServices = (shortServices) => API.put('/updateShortServices', shortServices );

export const getAddOnServices = () => API.get('/getAddOnServices');
export const updateAddOnServices = (addOnServices) => API.put('/updateAddOnServices', addOnServices );

export const getWorkPartnerAddOnServices = () => API.get('/getWorkPartnerAddOnServices');
export const updateWorkPartnerAddOnServices = (workPartnerAddOnServices) => API.put('/updateWorkPartnerAddOnServices', workPartnerAddOnServices );

export const getWorkPartnerLongServices = () => API.get('/getWorkPartnerLongServices');
export const updateWorkPartnerLongServices = (workPartnerLongServices) => API.put('/updateWorkPartnerLongServices', workPartnerLongServices );

export const getWorkPartnerShortServices = () => API.get('/getWorkPartnerShortServices');
export const updateWorkPartnerShortServices = (workPartnerShortServices) => API.put('/updateWorkPartnerShortServices', workPartnerShortServices );