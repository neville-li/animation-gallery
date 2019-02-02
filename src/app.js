import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import CanvasGalleryApp from "./js/CanvasGalleryApp";
import "./styles/styles.scss";

library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faAngleDoubleRight);
library.add(faAngleDoubleLeft);


ReactDOM.render(<CanvasGalleryApp />, document.querySelector("#root"));




