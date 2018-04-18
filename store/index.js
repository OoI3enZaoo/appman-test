
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
// import axios from 'axios'
import wpapi from 'wpapi'
var wp = new wpapi({
    endpoint: 'https://admin.getalongwell.co.th/wp-json',
    username: 'kong',
    password: 'kong1533'
});
wp.workdata = wp.registerRoute('wp/v2', '/portfolios/(?P<id>)')
wp.categories = wp.registerRoute('wp/v2', '/portfolio_categories/(?P<id>)')
let perPage = wp.workdata().perPage( 70 )


const InitialState = {
    dataWorks: [],
    dataCatSlug: [],
    dataClients: [],
    dataCategories: []
}
export const actionTypes = {
    ADD_DATA_WORK: 'ADD_DATA_WORK',
    ADD_DATA_CATSLUG: 'ADD_DATA_CATSLUG',
    ADD_DATA_CLIENTS: 'ADD_DATA_CLIENTS',
    ADD_DATA_CATEGORIES: 'ADD_DATA_CATEGORIES'
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DATA_WORK:
      return Object.assign({}, state, {
        dataWorks: state.dataWorks.concat(action.payload)
      })
      case actionTypes.ADD_DATA_CATSLUG:
      return Object.assign({}, state, {
        dataCatSlug: state.dataCatSlug.concat(action.payload)
      })
      case actionTypes.ADD_DATA_CLIENTS:
      return Object.assign({}, state, {
        dataClients: state.dataClients.concat(action.payload)
      })
      case actionTypes.ADD_DATA_CATEGORIES:
      return Object.assign({}, state, {
        dataCategories: state.dataCategories.concat(action.payload)
      })
    default: return state
  }
}

// ACTIONS
export const addDataWorks = (payload) => dispatch => {
    return dispatch({type: actionTypes.ADD_DATA_WORK, payload})
}
export const addDataCatSlug = (payload) => dispatch => {
    return dispatch({type: actionTypes.ADD_DATA_CATSLUG, payload})
}
export const addDataClients = (payload) => dispatch => {
    return dispatch({type: actionTypes.ADD_DATA_CLIENTS, payload})
}
export const addDataCategories = (payload) => dispatch => {
    return dispatch({type: actionTypes.ADD_DATA_CATEGORIES, payload})
}
export const initStore = (initialState = InitialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }
