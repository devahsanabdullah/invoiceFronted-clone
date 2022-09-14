import * as yup from 'yup';

export const SinupValdation=yup.object({
    

    StreetAdrees_from:yup.string().min(5).max(50).required("Enter Street Address"),
  city_from:yup.string().required("Enter City"),
  postCode_from:yup.string().required("Enter Post Code"),
  country_from:yup.string().required("Enter country"),
  // from bill end to bill start
  cliendName_to:yup.string().min(2).required("enter name"),
  cliendEmail_to:yup.string().email().required("enter correct email"),
  cliendAdress: yup.string().min(5).max(50).required("Enter Street Address"),
  cliendCity:yup.string().required("Enter City"),
  cliendPost:yup.string().required("Enter Post Code"),
  cliend_country:yup.string().required("Enter country"),
  // end cliend info
  dateInvoice:yup.date().required("select date"),
  paymentTerm:yup.string().required("Enter payment"),
  description:yup.string().min(2).max(100).required("enter description"),

  friends: yup.array().of(
    yup.object().shape({
      name:yup.string().min(2).required("enter") ,
      quantity:yup.number().min(1,null).max(100,"<100").required("enter"),
      item:yup.number().min(1,null).required("enter"),


    }))
});


