import PropTypes from 'prop-types';

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default function ErrorMessage({ errorMessage }) {
  return <span className="font-medium text-red-500">{errorMessage}</span>;
}
