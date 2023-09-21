/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import {
  POST_USER,
  LOGIN_USER,
  GET_USER,
  POST_CORREDOR,
  POST_PUNTOS,
  POST_CARRERA,
  GET_USER_LOGIN,
  GET_CORREDOR,
  GET_CARRERA,
  GET_CARRERA_ACTIVA,
  POST_APUESTA_WIN,
  GET_LINK_CAMARAS,
  GET_CARRERA_CORREDORES
} from "./ActionsTypes";
let inicialState = {
  isAuthenticated: false,
  user: [],
  userId: [],
  corredor: [],
  puntos: [],
  carrera: [],
  unicacarrera: {},
  apuestaWin: [],
  linkcamaras:[],
  carreraycorredores:[],
  linkcamaras: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {

    case GET_CARRERA_CORREDORES:
      return {
        ...state,
        carreraycorredores: action.payload,
      };

    case GET_LINK_CAMARAS:
      return {
        ...state,
        linkcamaras: action.payload,
      };

    case GET_CARRERA_ACTIVA:
      return {
        ...state,
        unicacarrera: action.payload,
      };

    case POST_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
        user: "Deslogueado",
      };
    case GET_USER:
      return {
        ...state,
        userId: action.payload,
      };
    case GET_USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case POST_CORREDOR:
      return {
        ...state,
        corredor: action.payload,
      };
    case POST_PUNTOS:
      return {
        ...state,
        puntos: action.payload,
      };
    case POST_CARRERA:
      return {
        ...state,
        puntos: action.payload,
      };
    case GET_CORREDOR:
      return {
        ...state,
        corredor: action.payload,
      };
    case POST_APUESTA_WIN:
      return {
        ...state,
        apuestaWin: action.payload,
      };

    case GET_CARRERA:
      return {
        ...state,
        carrera: action.payload,
      };
  }
  return state;
};

export default rootReducer;
