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
  FaSitemap,
} from "react-icons/fa";
import { SiOrigin, SiChevrolet } from "react-icons/si";
import { GrUserWorker } from "react-icons/gr";
import { RxEnter } from "react-icons/rx";
import {
  TbReportSearch,
  TbDeviceAirpodsCase,
  TbReportAnalytics,
} from "react-icons/tb";
import { PiUserListFill } from "react-icons/pi";
import SwippDarkLight from "../components/SwippDarkLight";

function handleScrollIntoView() {
  return window.scrollTo({ top: 0, behavior: "smooth" });
}

// for styling to the activeNavLink
const IS_ACTIVE = ({ isActive }) =>
  isActive
    ? "NavLinkStyle dark:bg-cazyTaupe bg-gray-400 dark:text-gray-900 text-gray-900"
    : "NavLinkStyle";

const Ul = (
  <ul className="gap-1  space-y-3 my-14 mb-24  [&>*]:w-full  ">
    <div className="flex items-center gap-3 pr-3 dark:text-gray-300 text-gray-600 ">
      <p className="font-extralight">منوی اصلی </p>
      <SwippDarkLight />
    </div>
    <li>
      <NavLink className={IS_ACTIVE} to="panel" onClick={handleScrollIntoView}>
        <RiPagesFill className="text-2xl" />
        صفحه اصلی(پنل)
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/itemList"
        onClick={handleScrollIntoView}
      >
        <FaSitemap className="text-2xl" />
        لیست آیتم
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/machineList"
        onClick={handleScrollIntoView}
      >
        <TbDeviceAirpodsCase className="text-2xl" />
        لیست دستگاه
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/viewAllMasterReport"
        onClick={handleScrollIntoView}
      >
        <TbReportAnalytics className="text-2xl" />
        مشاهده گزارش مستر
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/viewEnteredItem"
        onClick={handleScrollIntoView}
      >
        <FaSitemap className="text-2xl" />
        مشاهده آیتم ورودی
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/viewMeeting"
        onClick={handleScrollIntoView}
      >
        <MdMeetingRoom className="text-2xl" />
        مشاهده جلسه
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/reports"
        onClick={handleScrollIntoView}
      >
        <TbReportAnalytics className="text-2xl" />
        گزارشات
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/viewTask"
        onClick={handleScrollIntoView}
      >
        <FaTasks className="text-2xl" />
        مشاهده تسک
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/viewWarehouseReport"
        onClick={handleScrollIntoView}
      >
        <TbReportAnalytics className="text-2xl" />
        مشاهده گزارش انبار
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/viewReport"
        onClick={handleScrollIntoView}
      >
        <TbReportAnalytics className="text-2xl" />
        مشاهده گزارش
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addContractor"
        onClick={handleScrollIntoView}
      >
        <FaPersonShelter className="text-2xl" />
        افزودن پیمان کار
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addAttended"
        onClick={handleScrollIntoView}
      >
        <PiUserListFill className="text-2xl" />
        حضور و غیاب
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/attendanceList"
        onClick={handleScrollIntoView}
      >
        <FaPersonShelter className="text-2xl" />
        لیست حضور و غیاب
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addPurchase"
        onClick={handleScrollIntoView}
      >
        <FaBuyNLarge className="text-2xl" />
        افزودن خرید
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addEntered"
        onClick={handleScrollIntoView}
      >
        <ImEnter className="text-2xl" />
        افزودن ورودی
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addsubject"
        onClick={handleScrollIntoView}
      >
        <MdSubject className="text-2xl" />
        افزودن موضوع(سابجکت)
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addMachine"
        onClick={handleScrollIntoView}
      >
        <GiMachineGunMagazine className="text-2xl" />
        افزودن دستگاه
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addUser"
        onClick={handleScrollIntoView}
      >
        <FaUserPlus className="text-2xl" />
        افزودن کاربر
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addMeeting"
        onClick={handleScrollIntoView}
      >
        <MdMeetingRoom className="text-2xl" />
        افزودن جلسه
      </NavLink>
    </li>

    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addOrigin"
        onClick={handleScrollIntoView}
      >
        <SiOrigin className="text-2xl" />
        افزودن بنیاد(اوریجین)
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addWarehouse"
        onClick={handleScrollIntoView}
      >
        <FaWarehouse className="text-2xl" />
        افزودن انبار
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addPersonnel"
        onClick={handleScrollIntoView}
      >
        <FaUserTie className="text-2xl" />
        افزودن پرسنل
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addWorker"
        onClick={handleScrollIntoView}
      >
        <GrUserWorker className="text-2xl" />
        افزودن کارگر
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addProject"
        onClick={handleScrollIntoView}
      >
        <FaDiagramProject className="text-2xl" />
        افزودن پروژه
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/editProject"
        onClick={handleScrollIntoView}
      >
        <FaRegEdit className="text-2xl" />
        ویرایش پروژه
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addRole"
        onClick={handleScrollIntoView}
      >
        <SiChevrolet className="text-2xl" />
        افزودن نقش(رول)
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/editWarehouse"
        onClick={handleScrollIntoView}
      >
        <FaRegEdit className="text-2xl" />
        ویرایش انبار
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addUnit"
        onClick={handleScrollIntoView}
      >
        <FaUnity className="text-2xl" />
        افزودن بخش(یونیت)
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/EnterOrExitWarehouse"
        onClick={handleScrollIntoView}
      >
        <RxEnter className="text-2xl" />
        ورود یا خروج انبار
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addTask"
        onClick={handleScrollIntoView}
      >
        <FaTasks className="text-2xl" />
        افزودن وظیفه
      </NavLink>
    </li>
    <li>
      <NavLink
        className={IS_ACTIVE}
        to="/addReport"
        onClick={handleScrollIntoView}
      >
        <TbReportSearch className="text-2xl" />
        افزودن گزارش
      </NavLink>
    </li>
  </ul>
);

// for WebMode state
function PageNavWeb() {
  return (
    <nav className="md:w-1/5 py-2 min-h-screen  hidden md:inline-block  border border-l-2 dark:border-dark-gray border-gray-400 dark:text-white text-gray-700 dark:bg-cazyTaupe bg-bgSemiWhite">
      <div className="mx-4   border-2 border-gray-400  h-full  dark:bg-softPeach bg-beutyPeach  clipPathPolygon  rounded-lg  p-2">
        {Ul}
      </div>
    </nav>
  );
}

// for WebMode state
function PageNavMobile() {
  return (
    <nav className="scroll-smooth w-full min-h-screen  absolute z-50 mt-3 px-3 bg-softPeach  right-0 ">
      {Ul}
    </nav>
  );
}

export { PageNavWeb, PageNavMobile };
