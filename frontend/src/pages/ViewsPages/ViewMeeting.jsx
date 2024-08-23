import Center from "../../components/Center";
import DetailMeeting from "../../components/DetailMeeting";
import LazyBackground from "../../components/LazyBackground";
import Logo from "../../components/Logo";
import PageNav from "../../components/PageNav";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


// function ViewMeeting() {
const NotesList = () => {
    const [meetings, setMeetings] = useState([]);
    const [pers, setPers] = useState([]);
    
  
    useEffect(() => {
      
      // درخواست GET به API برای دریافت داده‌ها
      axios.get('http://localhost:8000/api/viewMeeting/')
        .then(response => {
          setMeetings(response.data.meetings);  // داده‌ها را در state ذخیره کنید
          console.log(response.data.meetings);
          setPers(response.data.pers); 
          console.log(response.data.pers);
        })
        .catch(error => {
          console.error('Error fetching notes:', error);
        });


    }, []);

  return (
    <>
      <PageNav />

      <Center>
        <Logo />

        <WithOutForm>
          <TitleForm text="مشاهده جلسه" styleCss="text-lg" />
          {meetings.map((meeting, index) => (
          <LazyBackground key={meeting.id}>
            <DetailMeeting
              index={index+1 + " :"}
              nameLabel="نام : "
              nameResult= { meeting.name }
              dateLabel="تاریخ :"
              dateResult={ meeting.date }
              durationLabel="مدت زمان (ساعت)"
              durationResult={ meeting.duration }
              proceedingLabel="شرح مذاکرات : "
              proceedingResult={ meeting.proceedings }
              agendaLabel="دستور جلسه :"
              agendaResult={ meeting.agenda }
              personnelsLabel="پرسنل(ها) : "
              personnelsResult= { pers[index].map((item) => ( item.map((obj) => ( obj.first_name+" "+obj.last_name+" , ")) ))}
            />
          </LazyBackground>
        ))}
        </WithOutForm>
      </Center>
    </>
  );
}

export default NotesList;
