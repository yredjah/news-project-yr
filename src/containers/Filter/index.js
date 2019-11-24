// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Filter from 'src/components/Filter';
import { onInputChange, onSubmitSearch } from 'src/store/reducer';

const mapStateToProps = state => ({
  searchByKeyWord: state.searchByKeyWord,
  searchByContry: state.searchByContry,
  searchByDate: state.searchByDate,
});

const mapDispatchToProps = dispatch => ({

  InputChange: (name, value) => {
    // console.log('dispatch');
    dispatch(onInputChange(name, value));
  },
  onSubmitSearch: () => {
    dispatch(onSubmitSearch());
  },
});

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);

// export
export default FilterContainer;
