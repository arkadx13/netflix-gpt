export const checkValidData = (email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID not valid";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
