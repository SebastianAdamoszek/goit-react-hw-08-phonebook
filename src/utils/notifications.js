import { Notify } from 'notiflix';

const NOTIFY_PARAMS = {
  backgroundColor: '#FF1493',
  timeout: 3000,
  position: 'left-top',
};

export const logInFailureNotification = () => {
  return Notify.failure('Wrong email or password.', NOTIFY_PARAMS);
};

export const registrationFailureNotification = () => {
  Notify.failure('Registration failed.', NOTIFY_PARAMS);
};

export const registrationFailureEmailInUseNotification = () => {
  Notify.failure('This e-mail address is already in use.', NOTIFY_PARAMS);
}

export const doubledContactNotification = name => {
  Notify.warning(`${name} is already in your Contacts.`, NOTIFY_PARAMS);
};

export const addedContactNotification = name => {
  Notify.warning(`${name} has been added to your Contacts.`, NOTIFY_PARAMS);
};

