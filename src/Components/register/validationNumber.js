export const validationNumber = (phone) => {
  const errors = {};

  if (!phone) {
    errors.phone = "empty";
  } else if (phone.length < 11) {
    errors.phone = "length";
  } else if (!/^[0]?[9][0-9]{9}$/.test(phone) && phone.length === 11){
    errors.phone = "incorect";
  } else delete errors.phone;
  return errors;
};
