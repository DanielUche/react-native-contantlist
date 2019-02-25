import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

class AppStoreProvider extends PureComponent {
  static childContextTypes = {
    store: PropTypes.shape({}),
  };

  constructor(props) {
    super(props);
    this.store = createStore(rootReducer);
  }

  getChildContext() {
    const { store } = this;
    return {
      store,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Provider store={this.store}>
        {children}
      </Provider>
    );
  }
}

export default AppStoreProvider;
