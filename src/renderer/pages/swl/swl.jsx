import React from 'react';
import TitleComponent from "./component/titleComponent.jsx";
import Maps from "../../features/maps.jsx";
import RxSite from "./component/rxSite.jsx";
import SearchFilter from "./component/searchFilter.jsx";

function Swl() {
    return (
        <div>
          <TitleComponent />
            <Maps/>
            <RxSite />
            <SearchFilter />
        </div>
    );
}

export default Swl;