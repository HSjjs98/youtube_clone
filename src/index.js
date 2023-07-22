import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos";
import PageNotFound from "./pages/PageNotFound";
import VideoDetail from "./pages/VideoDetail";
import KeywordVideo from "./pages/KeywordVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Videos />
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "videos/:keyword",
        element: <KeywordVideo />,
      },
      {
        path: "videos/watch/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

