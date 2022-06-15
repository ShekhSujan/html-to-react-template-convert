import React from 'react';
import {Switch,Route} from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import PublicRoutesList from '../routes/PublicRoutesList';


const Master = () => {
    return (
        <div className="fixed-bottom-padding">
            <Header/>
                <Switch>
                        {PublicRoutesList.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component{...props} />
                                        )}
                                    />
                                )
                            )
                        })}
                    </Switch>
                <Footer/>
        </div>
    )
}

export default Master