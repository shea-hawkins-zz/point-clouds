import React from 'react';

export default () => {
  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout__title">PCL Viewer</span>
      </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#scroll-tab-1" className="mdl-layout__tab is-active">01</a>
          <a href="#scroll-tab-2" className="mdl-layout__tab">02</a>
        </div>
    </header>
  );
};
