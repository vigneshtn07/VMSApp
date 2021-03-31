export const MaskInputType = {
    TaxIdFormat: [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    PhoneFormat: ['(', /\d/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    Zipcode: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}