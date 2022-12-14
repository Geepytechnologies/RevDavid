import React, {useCallback, useEffect} from 'react'
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Header from '../../../components/Header';
  


const Index = () => {
    const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);
  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function (details) {
                      // Your code here after capture the order
                      console.log(details);
                  });
              }}
          />
      </>
  );
}
const Mypaypal = useCallback(()=>{
    return (
        <PayPalScriptProvider
        options={{
            "client-id": "test",
            components: "buttons",
            currency: "USD"
        }}
      >
              <ButtonWrapper
        currency={currency}
        showSpinner={false}
      />
      </PayPalScriptProvider>
    )
})
  return (
    <div>
       <Header />
        <Navbar />
        <div className='paypal flex items-center justify-center'>
            <div className=' w-[90vw] md:w-[60vw]'>
                <Mypaypal />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Index;