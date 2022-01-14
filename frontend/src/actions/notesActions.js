import axios from "axios";
import {
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_LIST_FAIL,
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
} from "../constants/noteConstants";

// this func dispatches action for GETTING NOTES LIST
export const listNotes = () => async (dispatch, getState) => {
  try {
    // dispatching action when making request for notes list
    dispatch({
      type: NOTE_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.get(`/api/notes`, config);

    // dispatching action when recieved notes list sucessfully
    dispatch({
      type: NOTE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    // dispatching action when error
    dispatch({
      type: NOTE_LIST_FAIL,
      payload: message,
    });
  }
};

export const createNote =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      // setting headers for post request
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // sending request
      const { data } = await axios.post(
        `api/notes/create`,
        {
          title,
          content,
          category,
        },
        config
      );

      // dispatching action when note created successfully
      dispatch({
        type: NOTE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      // dispatching action when error
      dispatch({
        type: NOTE_CREATE_FAIL,
        payload: message,
      });
    }
  };
