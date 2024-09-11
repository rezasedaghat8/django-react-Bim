import { useState, useEffect } from "react";

function useFetchData() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/attendanceList/")
      .then((response) => {
        setLists(response.data.personnel_array); // داده‌ها را در state ذخیره کنید
        console.log(response.data.personnel_array);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  return null;
}

// This function is not wirking yet
