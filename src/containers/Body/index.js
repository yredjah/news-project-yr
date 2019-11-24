// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Body from 'src/components/Body';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({});

const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);

// export
export default BodyContainer;
