
// const redux = require("redux");

import * as redux from "redux"
// import { legacy_createStore as createStore} from 'redux'
import {todoReducer} from "./reducers/todoReducer.js";

 export const store = redux.createStore(todoReducer);

