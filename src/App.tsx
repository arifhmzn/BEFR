import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";

function AppShell(){return <div className="min-h-screen"><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></div>}
export default function App(){return <BrowserRouter><AppShell/></BrowserRouter>}
