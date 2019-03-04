import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

type Props = {
  children: React.ReactNodeArray;
}

class AppStoreProvider extends PureComponent<Props> {
  static childContextTypes = {
    store: PropTypes.shape({}),
  };

  constructor(props) {
    /* eslint-disable no-underscore-dangle */
    super(props);
    const middleware = [thunk];
    if (__DEV__) {
      middleware.push(logger);
    }
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(
      rootReducer, composeEnhancers(applyMiddleware(...middleware)),
    /* eslint-enable */
    );
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
