import React from 'react';
import { connect } from 'react-redux';
import { arrayToMesh } from '../../lib/util';
import 'whatwg-fetch';
import Header from './Header';
import PointCloudView from './PointCloudView';


class App extends React.Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        {this.props.cloudLoading ? <div>Spinner</div>: <PointCloudView pointCloud={this.props.pointCloud} />}
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    pointCloud: state.pointCloud,
    cloudLoading: state.cloudLoading
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getData: function() {
      dispatch({type: 'loadingCloud'});
      fetch('/pointCloud')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          return arrayToMesh(json);
        }).then(function(pointCloud) {
          // Should insert into database, then
          // inform redux of the ID.
          dispatch({
            type: 'receiveCloud',
            data: pointCloud
          });
          dispatch({type: 'loadedCloud'});

        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
