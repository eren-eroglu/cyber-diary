
import PropTypes from 'prop-types';
import EntryItem from './EntryItem';

const EntryList = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <EntryItem key={entry._id} entry={entry} />
      ))}
    </div>
  );
};

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EntryList;
