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