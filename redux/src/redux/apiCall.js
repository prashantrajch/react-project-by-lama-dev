import { updateError, updateStart, updateSuccess } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API(user);
    dispatch(updateSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(updateError());
  }
};

export const API = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 10) + 1;

      if (success > 5) {
        resolve(user);
      } else {
        reject("Failded to update user.");
      }
    }, 2000);
  });
};
