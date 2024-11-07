import React from 'react';
import Layout from '../components/Layout';
import Checkout from '../components/Checkout';
import Seo from '../components/Seo';

const CheckoutPage = () => {
    return ( 
        <Layout>
            <Seo />
            <Checkout />
        </Layout>
    );
}

export default CheckoutPage;