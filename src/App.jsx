import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AccountLog = lazy(() => import("./components/accountBox"));
const Home = lazy(() => import("./components/home"));
const Users = lazy(() => import("./components/users"));
const CheckAuth = lazy(() => import("./components/checkAuth"));
const ResetPassword = lazy(() => import("./components/accountBox/resetPassword"));


function App() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/log" element={<AccountLog />} />
					<Route path="/channels/:id" element={<Users />} />
					<Route path="/channels/:id/:cid" element={<Users />} />
					<Route path="/reset/:token" element={<ResetPassword />} />
					<Route path="*" element={<div>Not Found</div>} />
				</Routes>
				<CheckAuth />
			</Suspense>
		</>
	);
}

export default App;
