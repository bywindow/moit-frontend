import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import { useAuth } from './views/useAuth';

//Home
import HomeIndex from './views/HomeContainer';

function Routers(props) {

    const userId = useAuth();

    return (
        <BrowserRouter>
            <>
                <ScrollToTop>
                    <Switch>
                        {/* main page */}
                        <Route path={"/"+ userId} exact component={HomeIndex} />

                        <Redirect from="*" to={"/"+ userId} />
                    </Switch>
                </ScrollToTop>
            </>
        </BrowserRouter>
    );
}

export default Routers;