import { NavLink } from "react-router-dom";
// for icons
import { RiPagesFill } from "react-icons/ri";
import {
  FaPersonShelter,
  FaWarehouse,
  FaDiagramProject,
} from "react-icons/fa6";
import { ImEnter } from "react-icons/im";
import { MdSubject, MdMeetingRoom } from "react-icons/md";
import { GiMachineGunMagazine } from "react-icons/gi";
import {
  FaUserPlus,
  FaUserTie,
  FaRegEdit,
  FaUnity,
  FaTasks,
  FaBuyNLarge,
} from "react-icons/fa";
import { SiOrigin, SiChevrolet } from "react-icons/si";
import { GrUserWorker } from "react-icons/gr";
import { RxEnter } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { PiUserListFill } from "react-icons/pi";
import { useEffect } from "react";

function PageNav() {
  // scroll to the center and content
  useEffect(
    function () {
      document.body.scrollIntoView();
    },
    [NavLink]
  );

  return (
    <nav className="md:w-1/5 py-2    hidden md:inline-block  border border-l-2 border-dark-gray text-white bg-cazyTaupe">
      <div className="mx-4   border border-gray-400 bg-softPeach clipPathPolygon  rounded-lg  p-2">
        <ul className="gap-1  space-y-3 my-14 mb-24  [&>*]:w-full  ">
          <div className="flex items-start  pr-3 text-gray-300 ">
            <p className="font-extralight">منوی اصلی </p>
          </div>
          <li>
            <NavLink className="NavLinkStyle " to="/">
              <RiPagesFill className="text-2xl" />
              <span>صفحه اصلی(پنل)</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/itemList">
              <RiPagesFill className="text-2xl" />
              <span>لیست آیتم</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/machineList">
              <RiPagesFill className="text-2xl" />
              <span>لیست دستگاه</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/viewAllMasterReport">
              <RiPagesFill className="text-2xl" />
              <span>مشاهده گزارش مستر</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/viewEnteredItem">
              <RiPagesFill className="text-2xl" />
              <span>مشاهده آیتم ورودی</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/viewMeeting">
              <RiPagesFill className="text-2xl" />
              <span>مشاهده جلسه</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/reports">
              <RiPagesFill className="text-2xl" />
              <span>گزارش روزانه</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/viewTask">
              <RiPagesFill className="text-2xl" />
              <span>مشاهده تسک</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/viewWarehouseReport">
              <RiPagesFill className="text-2xl" />
              <span>مشاهده گزارش انبار</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/viewReport">
              <RiPagesFill className="text-2xl" />
              <span>مشاهده گزارش</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addContractor">
              <FaPersonShelter className="text-2xl" />
              <span> افزودن پیمان کار</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addAttended">
              <PiUserListFill className="text-2xl" />
              <span> حضور و غیاب</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/attendanceList">
              <FaPersonShelter className="text-2xl" />
              <span> لیست حضور و غیاب</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addPurchase">
              <FaBuyNLarge className="text-2xl" />
              <span> افزودن خرید</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addEntered">
              <ImEnter className="text-2xl" />
              <span> افزودن ورودی</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addsubject">
              <MdSubject className="text-2xl" />
              <span> افزودن موضوع(سابجکت)</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addMachine">
              <GiMachineGunMagazine className="text-2xl" />
              <span> افزودن دستگاه</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addUser">
              <FaUserPlus className="text-2xl" />
              <span> افزودن کاربر</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addMeeting">
              <MdMeetingRoom className="text-2xl" />
              <span> افزودن جلسه</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="NavLinkStyle " to="/addOrigin">
              <SiOrigin className="text-2xl" />
              <span> افزودن بنیاد(اوریجین)</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addWarehouse">
              <FaWarehouse className="text-2xl" />
              <span> افزودن انبار</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addPersonnel">
              <FaUserTie className="text-2xl" />
              <span> افزودن پرسنل</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addWorker">
              <GrUserWorker className="text-2xl" />
              <span> افزودن کارگر</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addProject">
              <FaDiagramProject className="text-2xl" />
              <span> افزودن پروژه</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/editProject">
              <FaRegEdit className="text-2xl" />
              <span> ویرایش پروژه</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addRole">
              <SiChevrolet className="text-2xl" />
              <span> افزودن نقش(رول)</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/editWarehouse">
              <FaRegEdit className="text-2xl" />
              <span> ویرایش انبار</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addUnit">
              <FaUnity className="text-2xl" />
              <span> افزودن بخش(یونیت)</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/EnterOrExitWarehouse">
              <RxEnter className="text-2xl" />
              <span> ورود یا خروج انبار</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addTask">
              <FaTasks className="text-2xl" />
              <span> افزودن وظیفه</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinkStyle " to="/addReport">
              <TbReportSearch className="text-2xl" />
              <span>افزودن گزارش</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PageNav;
