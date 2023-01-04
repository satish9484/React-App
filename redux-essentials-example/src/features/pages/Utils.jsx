export const addErrorIntoField = (errors) =>
  errors ? { error: true } : { error: false };

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const pawdRegExp =
  "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$";

export const userNameRegExp = "^[A-Za-z0-9]{3,16}$";

export const imageURL = "http://202.131.117.92:7152/uploads/"