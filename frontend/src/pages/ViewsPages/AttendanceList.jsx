import Center from "../../components/Center";
import LabelForm from "../../components/LabelForm";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TableForm from "../../components/TableForm";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";
import React, { useEffect, useState } from "react";
import axios from "axios";


function AttendanceList() {
  const date = new Date().toJSON().slice(0, 10);
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
  return (
    <>
      <PageNav />

      <Center>
        <Logo />
        <WithOutForm styleCss="">
          <TitleForm
            text="لیست حضور وغیاب"
            styleCss="text-lg text-center mb-0"
          />
          <TitleForm
            text={`تاریخ :${date}`}
            styleCss="text-base font-extralight  text-center"
          />

          <div className="flex xl:flex-row flex-col gap-5 ">
            <div className="w-full">
              <LabelForm
                text=" افراد حاضر :"
                styleCss="mt-7 font-bold text-lg"
              />
              <TableForm
                thItems={["ردیف", "نام کامل", "نقش"]}
                // tdItems={[
                //   { index: 1, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 2, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 3, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 4, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 4, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 4, role: "کارگر", fullName: "هومن خلیلی" },
                // ]}

                tdItems={
                  lists.map( (item, index) => { return {index: index+1, role:item.first_name+" "+item.last_name, fullName:"کارگر"}})
                }

              />
            </div>

            <div className="w-full">
              <LabelForm
                text="افراد غایب :"
                styleCss="mt-7 font-bold text-lg"
              />
              <TableForm
                thItems={["ردیف", "نام کامل", "نقش"]}
                // tdItems={[
                //   { index: 1, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 2, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 3, role: "کارگر", fullName: "هومن خلیلی" },
                //   { index: 4, role: "کارگر", fullName: "هومن خلیلی" },
                // ]}

                tdItems={
                  lists.map( (item, index) => { return {index: index+1, role:item.first_name+" "+item.last_name, fullName:"کارگر"}})
                }

              />
            </div>
          </div>
        </WithOutForm>
      </Center>
    </>
  );
}

export default AttendanceList;
