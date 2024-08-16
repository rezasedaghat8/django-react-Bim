import axios from 'axios';

const sendDataToServer = (data, url) => {
    axios.post(`http://localhost:8000/api/${url}/`, data)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        console.log(data);
      })
      .catch(error => {
        console.error('There was an error sending the data:', error);
      });
};

const getDataFromServer = (datum, setDatum, url) =>{ 
    // درخواست GET به API برای دریافت داده‌ها
    axios.get(`http://localhost:8000/api/${url}/`)
    .then(response => {
    setDatum(response.data[datum]);  // داده‌ها را در state ذخیره کنید
    console.log(response.data[datum])
    })
    .catch(error => {
    console.error('Error fetching notes:', error);
});
};


export {sendDataToServer, getDataFromServer};


