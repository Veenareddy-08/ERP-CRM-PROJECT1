import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/login";
import Dashboard from "../pages/dashboard/dashboard";

import DashboardLayout from "../components/layout/DashboardLayout";

import CustomerList from "../pages/customers/CustomerList";
import AddCustomer from "../pages/customers/addcustomer";
import EditCustomer from "../pages/customers/editcustomer";
import CustomerDetails from "../pages/customers/customerdetails";
import AddProduct from "../pages/product/addproduct";
import EditProduct from "../pages/product/editproduct";
import ProductList from "../pages/product/productlist";
import Inventory from  "../pages/inventory/inoventory";
import StockMovement from "../pages/inventory/stockmovement";
import LowStockAlert from "../pages/inventory/lowstockalert";
import CreateChallan from "../pages/challans/createchallans";
import DraftChallans from "../pages/challans/draftchallans";
import ConfirmedChallans from "../pages/challans/confirmedchallans";
import Reports from "../pages/reports/reports";
import Settings from "../pages/setting/settings";
import Challans from "../pages/challans/challans";

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Login Page */}

        <Route 
          path="/" 
          element={<Login />} 
        />



        {/* Dashboard Layout */}

        <Route element={<DashboardLayout />}>


          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Challan Management */}

          <Route
              path="/challans/create"
              element={<CreateChallan />}
            />

          <Route
            path="/challans/drafts"
            element={<DraftChallans />}
            />

          <Route
              path="/challans/confirmed"
              element={<ConfirmedChallans />}
            />

            <Route
              path="/reports"
              element={<Reports />}
            />

            <Route
              path="/settings"
              element={<Settings />}
              />



          {/* Customer Management */}

          <Route
            path="/customers"
            element={<CustomerList />}
          />


          <Route
            path="/customers/add"
            element={<AddCustomer />}
          />


          <Route
            path="/customers/edit"
            element={<EditCustomer />}
          />


          <Route
            path="/customers/details"
            element={<CustomerDetails />}
          />
          <Route
            path="/inventory"
            element={<Inventory />}
            />


<Route
path="/inventory/stock"
element={<StockMovement />}
/>


<Route
path="/inventory/low-stock"
element={<LowStockAlert />}
/>


              <Route 
path="/challans"
element={<Challans />}
/>


<Route
path="/challans/create"
element={<CreateChallan />}
/>


<Route
path="/challans/draft"
element={<DraftChallans />}
/>


<Route
path="/challans/confirmed"
element={<ConfirmedChallans />}
/>


          {/* Product Management */}

          <Route
            path="/products"
            element={<ProductList />}
          />

          <Route
            path="/products/add"
            element={<AddProduct />}
        />

           <Route
              path="/products/edit/:id"
              element={<EditProduct />}
            />

        </Route>


      </Routes>


    </BrowserRouter>

  );

}