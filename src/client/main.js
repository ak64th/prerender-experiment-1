import React from 'react';
import ReactDOM from 'react-dom';
import { PrerenderedControler } from "react-prerendered-component";

import App from '../app';

const element = document.getElementById('app');

ReactDOM.hydrate(<PrerenderedControler hydrated><App /></PrerenderedControler>, element);
