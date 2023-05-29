import PropTypes from 'prop-types';

const EntryItem = ({ entry }) => {
  return (
    <div>
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
    </div>
  );
};

EntryItem.propTypes = {
  entry: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default EntryItem;
