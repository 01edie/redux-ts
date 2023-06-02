import axios from "axios";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const searchRepositories =(term :string)=>{
    return async (dispatch:Dispatch<Action>)=>{
        dispatch({type:ActionTypes.SEARCH_REPOSITORIES})

        try {
         const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
            params:{
                text:term
            }
         })
         const names = data.objects.map((e: any)=>e.package.name)
         dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
            payload: names
         })
        } catch (error:any) {
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    }
    
}