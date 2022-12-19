import React, { useContext } from 'react';
import { Context } from '..';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from '../utils/consts';
import { observer } from 'mobx-react-lite';

const AdminStat = observer(() => {


    return (
        <div></div>
    );
});

export default AdminStat;
