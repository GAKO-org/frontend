import React from "react";
// React 18 이상에서 새로운 방식으로 임포트합니다.
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@/assets/css/reset.css";

// 'root' 엘리먼트를 선택하고, null 체크를 합니다.
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// React 18의 createRoot API를 사용하여 App 컴포넌트를 렌더링합니다.
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
