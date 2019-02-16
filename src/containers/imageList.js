import { connect } from "react-redux";

import ImageList from "../components/imageList";

const mapStateToProps = state => {
  return {
    urlList: state.imageUrls
  };
};

export default connect(
  mapStateToProps,
  null
)(ImageList);
