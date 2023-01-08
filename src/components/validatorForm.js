import * as yup from 'yup';

export const SinupValdation=yup.object({
    

    StreetAdrees_from:yup.string().min(10,"Enter minimum lenght 10").required("Enter Street Address"),
  city_from:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter City"),
  postCode_from:yup.number().typeError("Enter Number").positive("Positive Number").required("Enter Post Code"),
  country_from:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter country"),
  // from bill end to bill start
  cliendName_to:yup.string().min(2,"Enter name").matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter name"),
  cliendEmail_to:yup.string('Must be a valid email').email('Must be a valid email').required("Enter correct email"),
  cliendAdress: yup.string().min(10,"Enter minimum lenght 10").required("Enter Street Address"),
  cliendCity:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter City"),
  cliendPost:yup.number().typeError("Enter Number").positive("Positive Number").required("Enter Post Code"),
  cliend_country:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter country"),
  // end cliend info
  dateInvoice:yup.date().required("Select Date"),
  paymentTerm:yup.string().required("Enter payment"),
  description:yup.string().min(10,"Enter minimum lenght 10").required("Enter description"),

  friends: yup.array().of(
    yup.object().shape({
      name:yup.string().min(2).matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter") ,
      quantity:yup.number().min(1,null).positive("Positive").max(100,"less 100").typeError("Number").required("Quantity?"),
      item:yup.number().min(1,null).positive("Positive Number").typeError("Number").required("Price?"),


    }))
});


