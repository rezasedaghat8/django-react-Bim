import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import Applayout from "./ui/Applayout";
import { MenuBarContextProvider } from "./context/MenuBarContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const Panel = lazy(() => import("./pages/Panel"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AddContractor = lazy(() => import("./pages/AddsPages/AddContractor"));
const AddSubject = lazy(() => import("./pages/AddsPages/AddSubject"));
const AddMachine = lazy(() => import("./pages/AddsPages/AddMachine"));
const AddUser = lazy(() => import("./pages/AddsPages/AddUser"));
const AddOrigin = lazy(() => import("./pages/AddsPages/AddOrigin"));
const AddWarehouse = lazy(() => import("./pages/AddsPages/AddWarehouse"));
const AddPersonnel = lazy(() => import("./pages/AddsPages/AddPersonnel"));
const AddWorker = lazy(() => import("./pages/AddsPages/AddWorker"));
const AddProject = lazy(() => import("./pages/AddsPages/AddProject"));
const EditProject = lazy(() => import("./pages/AddsPages/EditProject"));
const AddRole = lazy(() => import("./pages/AddsPages/AddRole"));
const EditWarehouse = lazy(() => import("./pages/AddsPages/EditWarehouse"));
const AddEntered = lazy(() => import("./pages/AddsPages/AddEntered"));
const AddUnit = lazy(() => import("./pages/AddsPages/AddUnit"));
const EnterOrExitWarehouse = lazy(() =>
  import("./pages/AddsPages/EnterOrExitWarehouse")
);
const AddTask = lazy(() => import("./pages/AddsPages/AddTask"));
const AddReport = lazy(() => import("./pages/AddsPages/AddReport"));
const Login = lazy(() => import("./pages/Login"));
const AddMeeting = lazy(() => import("./pages/AddsPages/AddMeeting"));
const Reports = lazy(() => import("./pages/ViewsPages/Reports"));
const AddPurchase = lazy(() => import("./pages/AddsPages/AddPurchase"));
const AddAttended = lazy(() => import("./pages/AddsPages/AddAttended"));
const AttendanceList = lazy(() => import("./pages/ViewsPages/AttendanceList"));
const ItemList = lazy(() => import("./pages/ViewsPages/ItemList"));
const MachineList = lazy(() => import("./pages/ViewsPages/MachineList"));
const ViewAllMasterReport = lazy(() =>
  import("./pages/ViewsPages/ViewAllMasterReport")
);
const ViewEnteredItem = lazy(() =>
  import("./pages/ViewsPages/ViewEnteredItem")
);
const ViewMeeting = lazy(() => import("./pages/ViewsPages/ViewMeeting"));
const ViewTask = lazy(() => import("./pages/ViewsPages/ViewTask"));
const ViewWarehouseReport = lazy(() =>
  import("./pages/ViewsPages/ViewWarehouseReport")
);
const ViewReport = lazy(() => import("./pages/ViewsPages/ViewReport"));

// make project with lazy loading and suspense after the project finishing

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBarContextProvider>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* <Route path="/" element={<Login />} /> */}
              <Route element={<Applayout />}>
                <Route replace index element={<Navigate to="panel" />} />
                <Route path="panel" element={<Panel />} />
                <Route path="addContractor" element={<AddContractor />} />
                <Route path="addSubject" element={<AddSubject />} />
                <Route path="addMachine" element={<AddMachine />} />
                <Route path="addUser" element={<AddUser />} />
                <Route path="addMeeting" element={<AddMeeting />} />
                <Route path="addOrigin" element={<AddOrigin />} />
                <Route path="addWarehouse" element={<AddWarehouse />} />
                <Route path="addPersonnel" element={<AddPersonnel />} />
                <Route path="addWorker" element={<AddWorker />} />
                <Route path="addProject" element={<AddProject />} />
                <Route path="editProject" element={<EditProject />} />
                <Route path="addRole" element={<AddRole />} />
                <Route path="editWarehouse" element={<EditWarehouse />} />
                <Route path="addEntered" element={<AddEntered />} />
                <Route path="addUnit" element={<AddUnit />} />
                <Route
                  path="EnterOrExitWarehouse"
                  element={<EnterOrExitWarehouse />}
                />
                <Route path="addTask" element={<AddTask />} />
                <Route path="addReport" element={<AddReport />} />
                <Route path="addPurchase" element={<AddPurchase />} />
                <Route path="addAttended" element={<AddAttended />} />
                <Route path="reports" element={<Reports />} />

                {/* for viewsPages */}
                <Route path="attendanceList" element={<AttendanceList />} />
                <Route path="itemList" element={<ItemList />} />
                <Route path="machineList" element={<MachineList />} />
                <Route
                  path="viewAllMasterReport"
                  element={<ViewAllMasterReport />}
                />
                <Route path="viewEnteredItem" element={<ViewEnteredItem />} />
                <Route path="viewMeeting" element={<ViewMeeting />} />
                <Route path="viewTask" element={<ViewTask />} />
                <Route
                  path="viewWarehouseReport"
                  element={<ViewWarehouseReport />}
                />
                <Route path="viewReport" element={<ViewReport />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* for toastify */}
          </Suspense>
        </MenuBarContextProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        // containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "18px",
            width: "750px",
            // maxWidth: "750px",
            padding: "16px 24px",
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </>
  );
}
