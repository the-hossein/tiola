export const validateCode = (code) => {
  const errors = {};

  if (!code) {
    errors.code = "empty";
  } else if (code.length < 6) {
    errors.code = "lengthCode";
  } else delete errors.code;
  return errors;
};
