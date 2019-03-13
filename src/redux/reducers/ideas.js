const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
  data: []
  // the ideas will be retrieved from the backend API /ideas
}

const ideasReducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS_BEGIN': {
      return {
        ideas: state.ideas,
        isLoading: true,
        latestError: null
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response,
        data: action.payload.response.data.ideas
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: null
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}

export default ideasReducer
