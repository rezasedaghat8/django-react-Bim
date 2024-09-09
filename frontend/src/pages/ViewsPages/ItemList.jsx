import { useMenuBarContext } from "../../context/MenuBarContext";
import React, { useEffect, useState } from "react";
import DetailItems from "../../components/DetailItems";
import LabelForm from "../../components/LabelForm";
import LazyBackground from "../../components/LazyBackground";
import TitleForm from "../../components/TitleForm";
import WithOutForm from "../../components/WithoutForm";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // درخواست GET به API برای دریافت داده‌ها
    axios
      .get("http://localhost:8000/api/itemList/")
      .then((response) => {
        setItems(response.data.items); // داده‌ها را در state ذخیره کنید
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  const { setIsShow } = useMenuBarContext();
  useEffect(
    function () {
      setIsShow(false);
    },
    [setIsShow]
  );

  return (
    <>
      <WithOutForm styleCss="gap-5">
        <TitleForm text="لیست آیتم ها" styleCss="text-lg" />

        {/* for warehousess 1 ----------------------------------------------------------------------------------------------*/}
        <LabelForm text="انبار 1 :" styleCss="text-center text-lg" />
        {items.map((item) => (
          <LazyBackground key={item.id}>
            <DetailItems
              index="1 :"
              nameLabel="نام : "
              nameResult={item.title}
              descriptionLabel="توضیحات : "
              descriptionResult="قسمت توضیحات"
              unitLabel="واحد : "
              unitResult="واحد 5"
              quantityLabel="تعداد : "
              quantityResult={100}
            />
          </LazyBackground>
        ))}

        {/* for warehosue 2 ----------------------------------------------------------------------------------------------*/}
        <LabelForm text="انبار 2 :" styleCss="text-center text-lg" />
        <LazyBackground>
          <DetailItems
            index="1 :"
            nameLabel="نام : "
            nameResult="آیتم 1"
            descriptionLabel="توضیحات : "
            descriptionResult="قسمت توضیحات"
            unitLabel="واحد : "
            unitResult="واحد 5"
            quantityLabel="تعداد : "
            quantityResult={100}
          />
        </LazyBackground>
      </WithOutForm>
    </>
  );
}

export default ItemList;
