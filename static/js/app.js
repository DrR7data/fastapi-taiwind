async function submitOrder() {
            const productName = document.getElementById('productName').value;
            const quantity = document.getElementById('quantity').value;
            const response = await fetch('https://p4yoxar7f4.execute-api.us-east-1.amazonaws.com/prod/orders', {
                method: 'POST',
                body: JSON.stringify({ productName, quantity }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) { alert('Order submitted successfully!'); document.getElementById('orderForm').reset(); }
            else { alert('Failed to submit order.'); }
        }

 // callAPI function that takes the base and exponent numbers as parameters
var callAPI = (peso,estatura,edad,fecha_nacimiento)=>{
            // instantiate a headers object
            var myHeaders = new Headers();
            // add content type header to object
            myHeaders.append("Content-Type", "application/json");
            // using built in JSON utility package turn object to string and store in a variable
            var raw = JSON.stringify({"peso":peso,"estatura":estatura, "edad":edad, "fecha_nacimiento":fecha_nacimiento});
            // create a JSON object with parameters for API call and store in a variable
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            // make API call with parameters and use promises to get response
            fetch("https://lewtp1gqq2.execute-api.us-east-1.amazonaws.com/dev-power", requestOptions)
            .then(response => response.text())
            .then(result => alert(JSON.parse(result).body))
            .catch(error => console.log('error', error));
        }