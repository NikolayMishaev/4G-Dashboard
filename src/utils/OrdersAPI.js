const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status} ${res.statusText}`);
};

export const getOrdersServer = async () => {
  try {
    const response = await fetch(`http://localhost:3000/orders`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    });
    return checkStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateOrderServer = async (orderID, field) => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${orderID}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(field)
      });
      return checkStatus(response);
    } catch (err) {
      return Promise.reject(err);
    }
};