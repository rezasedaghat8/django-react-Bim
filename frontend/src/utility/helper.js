import axios from "axios";
import toast from "react-hot-toast";

const sendDataToServer = (data, url) => {
  axios
    .post(`http://localhost:8000/api/${url}/`, data)
    .then((response) => {
      console.log("Data sent successfully:", response.data);
      console.log(data);
      toast.success("با موفقیت ثبت شد");
    })
    .catch((error) => {
      console.error("There was an error sending the data:", error);
      toast.error("مشکلی در انجام عملیات رخ داد ");
    });
};

export default sendDataToServer;

// const getDataFromServer = (setDatum, datum, url) =>{
//     // درخواست GET به API برای دریافت داده‌ها
//     axios.get(`http://localhost:8000/api/${url}/`)
//     .then(response => {
//     setDatum(response.data[datum]);  // داده‌ها را در state ذخیره کنید
//     console.log(response.data.datum)
//     })
//     .catch(error => {
//     console.error('Error fetching notes:', error);
// });
// };
