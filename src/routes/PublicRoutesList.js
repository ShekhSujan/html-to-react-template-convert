import React from "react";
import Page403 from "../pages/403";
import Page404 from "../pages/404";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Condition from "../pages/Condition";
import Faq from "../pages/Faq";
import Help from "../pages/Help";
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import MyAccount from "../pages/MyAccount";
import MyAddress from "../pages/MyAddress";
import MyOrder from "../pages/MyOrder";
import Popular from "../pages/Popular";
import Privacy from "../pages/Privacy";
import ProductDetails from "../pages/ProductDetails";
import PromoDetails from "../pages/PromoDetails";
import Promos from "../pages/Promos";
import Recomended from "../pages/Recomended";
import Refund from "../pages/Refund";
import Review from "../pages/Review";
import Search from "../pages/Search";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import StatusCanceled from "../pages/StatusCanceled";
import StatusComplete from "../pages/StatusComplete";
import StatusOnprocess from "../pages/StatusOnprocess";
import Successfull from "../pages/Successfull";
import TermsCondition from "../pages/TermsCondition";
import Ticket from "../pages/Ticket";
import Trending from "../pages/Trending";
import Verification from "../pages/Verification";



const PublicRoutesList = [
    {path:"/", exact:true,name:'Home',component:Home },
    {path:"/listing", exact:true,name:'Listing',component:Listing },
    {path:"/trending", exact:true,name:'Trending',component:Trending },
    {path:"/recomended", exact:true,name:'Recomended',component:Recomended },
    {path:"/product-details", exact:true,name:'ProductDetails',component:ProductDetails },
    {path:"/popular", exact:true,name:'Popular',component:Popular },
    {path:"/cart", exact:true,name:'Cart',component:Cart },
    {path:"/checkout", exact:true,name:'Checkout',component:Checkout },
    {path:"/successfull", exact:true,name:'Successfull',component:Successfull },
    {path:"/my-order", exact:true,name:'MyOrder',component:MyOrder },
    {path:"/status-complete", exact:true,name:'StatusComplete',component:StatusComplete },
    {path:"/status-onprocess", exact:true,name:'StatusOnprocess',component:StatusOnprocess },
    {path:"/status-canceled", exact:true,name:'StatusCanceled',component:StatusCanceled },
    {path:"/review", exact:true,name:'Review',component:Review },
    {path:"/verification", exact:true,name:'Verification',component:Verification },
    {path:"/promos", exact:true,name:'Promos',component:Promos },
    {path:"/promo-details", exact:true,name:'PromoDetails',component:PromoDetails },
    {path:"/terms-condition", exact:true,name:'TermsCondition',component:TermsCondition },
    {path:"/privacy", exact:true,name:'Privacy',component:Privacy },
    {path:"/condition", exact:true,name:'Condition',component:Condition },
    {path:"/help", exact:true,name:'Help',component:Help },
    {path:"/ticket", exact:true,name:'Ticket',component:Ticket },
    {path:"/refund", exact:true,name:'Refund',component:Refund },
    {path:"/faq", exact:true,name:'Faq',component:Faq },
    {path:"/signin", exact:true,name:'SignIn',component:SignIn },
    {path:"/signup", exact:true,name:'SignUp',component:SignUp },
    {path:"/myaccount", exact:true,name:'MyAccount',component:MyAccount },
    {path:"/myaddress", exact:true,name:'MyAddress',component:MyAddress },
    {path:"/search", exact:true,name:'Search',component:Search },




    {path:"/403", exact:true,name:'Page403',component:Page403},
    {path:"/404", exact:true,name:'Page404',component:Page404},

];
export default PublicRoutesList;