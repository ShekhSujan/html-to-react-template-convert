import React from "react";
import { Route } from 'react-router-dom'
import Master from './layouts/Master'

const PublicRoute = ({...rest}) => {
  return (
    <div>
        <Route {...rest} render={(props)=><Master{...props}/>}/>
    </div>
  )
}

export default PublicRoute