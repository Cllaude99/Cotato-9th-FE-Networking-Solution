import PropTypes from 'prop-types';

Buttton.propTypes = {
  text: PropTypes.string,
  pending: PropTypes.bool,
};

export default function Buttton({ text, pending }) {
  return (
    <button
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? 'Please Wait..' : text}
    </button>
  );
}
