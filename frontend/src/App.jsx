import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./pages/Loading";
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
const Reports = lazy(() => import("./pages/Reports"));
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
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* <Route index element={<Panel />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Panel />} />
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
          <Route path="viewAllMasterReport" element={<ViewAllMasterReport />} />
          <Route path="viewEnteredItem" element={<ViewEnteredItem />} />
          <Route path="viewMeeting" element={<ViewMeeting />} />
          <Route path="viewTask" element={<ViewTask />} />
          <Route path="viewWarehouseReport" element={<ViewWarehouseReport />} />
          <Route path="viewReport" element={<ViewReport />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
