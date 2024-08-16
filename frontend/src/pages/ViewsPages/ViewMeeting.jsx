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
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      
      // درخواست GET به API برای دریافت داده‌ها
      axios.get('http://localhost:8000/api/viewMeeting/')
        .then(response => {
          setNotes(response.data.notes);  // داده‌ها را در state ذخیره کنید
          console.log(response.data.moze)
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
          {notes.map(note => (
          <LazyBackground key={note.id}>
            <DetailMeeting
              index="1:"
              nameLabel="نام : "
              nameResult= { note.title }
              dateLabel="تاریخ :"
              dateResult="00 : 00  AM"
              durationLabel="مدت زمان (ساعت)"
              durationResult="زمان دلخواه"
              proceedingLabel="شرح مذاکرات : "
              proceedingResult="توضیح دلخواه"
              agendaLabel="دستور جلسه :"
              agendaResult=" توضیح دلخواه"
              personnelsLabel="پرسنل(ها) : "
              personnelsResult="هومن خلیلی - هومن خلیلی - هومن خلیلی"
            />
          </LazyBackground>
        ))}
        </WithOutForm>
      </Center>
    </>
  );
}

export default NotesList;
