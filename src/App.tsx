import React, {
  Suspense,
  // useEffect, useState
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddRestaurant from "./components/AddRestaurant";
import EditRestaurant from "./components/EditRestaurant";
import RestaurantList from "./components/RestaurantList";

const App: React.FC = () => {
  // const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeight(window.innerHeight);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <React.StrictMode>
      <Suspense
        fallback={
          <div
            style={{
              color: "#000",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Loading...
          </div>
        }
      >
        <Router>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/add" element={<AddRestaurant />} />
            <Route path="/edit/:id" element={<EditRestaurant />} />
            {/* Default Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
