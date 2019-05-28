// Set the application ID
var applicationId = "REPLACE_WITH_APPLICATION_ID";

// onGetCardNonce is triggered when the "Pay with credit card" button is clicked
function onGetCardNonce(event) {
  // Don't submit the form until SqPaymentForm returns with a nonce
  event.preventDefault();
  // Request a nonce from the SqPaymentForm object
  paymentForm.requestCardNonce();
}

// Create and initialize a payment form object
var paymentForm = new SqPaymentForm({
  // Initialize the payment form elements
  applicationId: applicationId,
  inputClass: 'sq-input',

  // Customize the CSS for SqPaymentForm iframe elements
  inputStyles: [{
    fontSize: '16px',
    padding: '16px',
  }],

  // Initialize the credit card placeholders
  cardNumber: {
    elementId: 'sq-card-number',
    placeholder: '• • • •  • • • •  • • • •  • • • •'
  },
  cvv: {
    elementId: 'sq-cvv',
    placeholder: 'CVV'
  },
  expirationDate: {
    elementId: 'sq-expiration-date',
    placeholder: 'MM/YY'
  },
  postalCode: {
    elementId: 'sq-postal-code',
    placeholder: '12345'
  },

  // SqPaymentForm callback functions
  callbacks: {
    /*
     * callback function: cardNonceResponseReceived
     * Triggered when: SqPaymentForm completes a card nonce request
     */
    cardNonceResponseReceived: function (errors, nonce, cardData) {
      if (errors) {
        // Log errors from nonce generation to the Javascript console
        console.error('Encountered errors:');
        errors.forEach(function (error) {
          console.error('  ' + error.message);
        });
        alert('Encountered errors, check console for more detailes');
        return;
      }

      alert(`You get a nonce:\n${nonce}`);
      // Uncomment the following block to
      // 1. assign the nonce to a form field and
      // 2. post the form to the payment processing handler
      /*
      document.getElementById('card-nonce').value = nonce;
      document.getElementById('nonce-form').submit();
      */
    }
  }
});
