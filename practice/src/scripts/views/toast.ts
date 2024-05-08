import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

type ShowMessageProps = {
  text: string;
  duration?: number;
};

type NotifyProps = ShowMessageProps & {
  state: string;
};

const showSuccess = ({ text, duration = 2000 }: ShowMessageProps) =>
  notify({ text, state: 'success', duration });
const showError = ({ text, duration = 2000 }: ShowMessageProps) =>
  notify({ text, state: 'error', duration });

const notify = ({ text, state, duration }: NotifyProps) => {
  Toastify({
    text,
    duration,
    gravity: 'top',
    position: 'center',
    className: state,
  }).showToast();
};

export { showSuccess, showError };
