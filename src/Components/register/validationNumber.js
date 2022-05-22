export const validationNumber = (phone) => {
  const errors = {};

  if (!phone) {
    errors.phone = "empty";
  } else if (phone.length < 11) {
    errors.phone = "length";
  } else if (!/(\+98|0)?9\d{9}/.test(phone) && phone.length === 11) {
    errors.phone = "incorect";
  } else delete errors.phone;
  return errors;
};
