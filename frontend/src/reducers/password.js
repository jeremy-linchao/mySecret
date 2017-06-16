import * as ACTION from '../actions/passwordAction';

function filterDataSet(dataSet) {
  return dataSet.map(ele => {
    return {
      ...ele,
      isHidden: true
    }
  })
}

function addPassword(dataSet, data) {
  return [...dataSet, Object.assign({}, data, {
    isHidden: true
  })];
}

function deletePassword(dataSet, id) {
  return dataSet.filter(ele => {
    if (ele.id === id) {
      return false;
    } else {
      return true;
    }
  })
} 

function showPassword(dataSet, id) {
  return dataSet.map(ele => {
    if (ele.id === id) {
      return {
        ...ele,
        isHidden: false
      }
    } else {
      return ele
    }
  })
}

function hidePassword(dataSet, id) {
  return dataSet.map(ele => {
    if (ele.id === id) {
      return {
        ...ele,
        isHidden: true
      }
    } else {
      return ele
    }
  })
}

function password ( state = {
  dataSet: [],
  loading: false,
  dialogVisible: false,
  tag: '',
  url: '',
  name: '',
  password: ''
}, action ) {
  switch (action.type) {
    case ACTION.REQUEST_PASSWORD_START:
      return {
        ...state,
        loading: true
      }
    case ACTION.REQUEST_PASSWORD_SUCCESS:
      return {
        ...state,
        dataSet: filterDataSet(action.dataSet),
        loading: false
      }
    case ACTION.REQUEST_PASSWORD_FAIL:
      return {
        ...state,
        loading: false
      }
    case ACTION.CREATE_PASSWORD_START:
      return {
        ...state,
        loading: true
      }
    case ACTION.CREATE_PASSWORD_SUCCESS:
      return {
        ...state,
        dataSet: addPassword(state.dataSet, action.data),
        loading: false
      }
    case ACTION.CREATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false
      }
    case ACTION.DELETE_PASSWORD_START:
      return {
        ...state,
        loading: true
      }
    case ACTION.DELETE_PASSWORD_SUCCESS:
      return {
        ...state,
        dataSet: deletePassword(state.dataSet, action.id),
        loading: false
      }
    case ACTION.DELETE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false
      }
    case ACTION.INPUT_TAG:
      return {
        ...state,
        tag: action.value
      }
    case ACTION.INPUT_URL:
      return {
        ...state,
        url: action.value
      }
    case ACTION.INPUT_NAME:
      return {
        ...state,
        name: action.value
      }
    case ACTION.INPUT_PASSWORD:
      return {
        ...state,
        password: action.value
      }
    case ACTION.SHOW_DIALOG:
      return {
        ...state,
        dialogVisible: true
      }
    case ACTION.HIDE_DIALOG:
      return {
        ...state,
        dialogVisible: false
      }
    case ACTION.SHOW_PASSWORD:
      return {
        ...state,
        dataSet: showPassword(state.dataSet, action.id)
      }
    case ACTION.HIDE_PASSWORD:
      return {
        ...state,
        dataSet: hidePassword(state.dataSet, action.id)
      }
    default:
      return state;
  }
}

export default password;