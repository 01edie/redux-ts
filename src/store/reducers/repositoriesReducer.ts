import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoriesReducer {
  loading: Boolean;
  error: string | null;
  data: string[];
}
const initialState ={
  loading: false,
  error: null,
  data:[]
}
const reducer = (
  state: RepositoriesReducer = initialState,
  action: Action
): RepositoriesReducer => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certain that this action is SearchRepositoriesSuccessAction
      // and if you try error:action.payload , it will throw error
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
