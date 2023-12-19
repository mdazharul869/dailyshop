/* eslint-disable react/prop-types */

import Helmet from "react-helmet";

function MetaData  ( props )  {
  return (
    <Helmet>
      
      <title>{props.tittle}</title>
    </Helmet>
  );
}

export default MetaData;
