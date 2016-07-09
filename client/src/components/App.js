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
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <main className="mdl-layout__content">
          <div className="mdl-card mdl-shadow--4dp displayWindow">
            {
              this.props.cloudLoading ?
                <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate progress"/>
                :
                <PointCloudView pointCloud={this.props.pointCloud} />
            }
          </div>
        </main>
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
