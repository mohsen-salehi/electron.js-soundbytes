import React from 'react';

function Text() {
    return (
      <>
          <strong className="display-3 col-12 row m-0 text-center p-0 justify-content-center align-items-center">
              Proppy <br/>
              HF Propagation Prediction
          </strong>
          <div className="container h5 fw-normal py-3">
              The tools provided by this web application enable users to predict available frequencies, signal levels and corresponding reliabilities for High Frequency (HF) circuits. All predictions are performed using the ITU's ITURHFPROP application; a software method for the prediction of the performance of HF circuits in accordance with Recommendation ITU-R P.533-14.
          </div>
      </>

    );
}

export default Text;