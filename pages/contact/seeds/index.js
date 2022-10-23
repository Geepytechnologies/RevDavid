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
                  return actions.order.capture().then(function () {
                      // Your code here after capture the order
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
       <div className='h-[100vh]'>
       <div className='min-h-[100%] w-[100%] relative'>
       <Navbar />
       <div className='my-[70px]'>
         <Mypaypal />
        </div>
        <div className='bottom-[0px] absolute w-[100%]'>
            <Footer />
        </div> 
        </div> 
        </div> 
    </div>
  )
}

export default Index;