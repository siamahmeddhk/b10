function cardcal(btn, inputs, mainsum) {
  document.getElementById(btn).addEventListener('click', function() {
      let cardAddedBalance = document.getElementById(mainsum).innerText;
      let valcardAddedBalance = parseInt(cardAddedBalance);
      let cardinput = document.getElementById(inputs).value;
      let valcardinput = parseFloat(cardinput);
      let mainbalance = document.getElementById('mainbalance').innerText;
      let valmainbalance = parseFloat(mainbalance);
      let history = document.getElementById('history');

      // Create a new history entry
      let div2 = document.createElement('div');
      div2.innerHTML = `
          <p class="text-center p-4 bg-red-400 mt-2">${cardinput} is added on donation</p>
      `;
      history.appendChild(div2);

      // Calculate the new balance
      let sum = valcardAddedBalance + valcardinput;
      document.getElementById(mainsum).innerText = sum;

      if (valmainbalance > sum) {
          let sum2 = valmainbalance - sum;
          document.getElementById('mainbalance').innerText = sum2;

          // Show the "Payment Completed" modal
          showPaymentCompletedModal();
      } else {
          alert('Not enough balance');
      }
  });

  // Function to show the "Payment Completed" modal
  function showPaymentCompletedModal() {
      // Create the modal if it doesn't already exist
      if (!document.getElementById('paymentCompletedModal')) {
          let modalDiv = document.createElement('div');
          modalDiv.innerHTML = `
              <dialog id="paymentCompletedModal" class="modal">
                  <div class="modal-box bg-white max-w-md mx-auto p-6 rounded-lg shadow-lg text-center">
                      <h3 class="text-lg font-bold text-center">Payment Completed!</h3>
                      <p class="py-4 text-center">Your payment has been successfully processed.</p>
                      <div class="modal-action flex justify-center">
                          <form method="dialog">
                              <button class="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
                          </form>
                      </div>
                  </div>
              </dialog>
          `;
          document.body.appendChild(modalDiv);
      }

      // Get the modal element
      let modal = document.getElementById('paymentCompletedModal');

      // Show the modal
      modal.showModal();
  }
}