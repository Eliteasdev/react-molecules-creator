// localhost:5173/eyJhdG9tcyI6Ilt7XCJpZFwiOlwiYmZjSW9vLWxqNUxQa0tVR2JFc2ZxXCIsXCJpZEF0b21cIjpcInN1bGZ1clwiLFwicG9zXCI6WzAsMCwwXSxcInJhZGl1c1wiOjAuMjUsXCJjb2xvclwiOlwiI2ZmMFwifSx7XCJpZFwiOlwiZFlMSk1nM0RkamZ4eGVuV2tETTJoXCIsXCJpZEF0b21cIjpcIm94eWdlblwiLFwicG9zXCI6WzAuNSwwLjUsMF0sXCJyYWRpdXNcIjowLjEsXCJjb2xvclwiOlwiI2ZmZlwifSx7XCJpZFwiOlwiMGdlWmpzNjV6UlJCbHZkb2pCczUxXCIsXCJpZEF0b21cIjpcIm94eWdlblwiLFwicG9zXCI6Wy0wLjUsMC41LDBdLFwicmFkaXVzXCI6MC4xLFwiY29sb3JcIjpcIiNmZmZcIn0se1wiaWRcIjpcIlBKb25GaVk2Q3A5LW92LVFiNmUwS1wiLFwiaWRBdG9tXCI6XCJveHlnZW5cIixcInBvc1wiOlswLC0wLjYsMF0sXCJyYWRpdXNcIjowLjEsXCJjb2xvclwiOlwiI2ZmZlwifSx7XCJpZFwiOlwiTGFvQ3hlaTJrbXBTaGhkRzNTc1FyXCIsXCJwb3NcIjpbMCwxLDBdLFwicmFkaXVzXCI6MC4yLFwiY29sb3JcIjpcIiMyYWZcIn0se1wiaWRcIjpcInBReW5tcTBmc013dTl5dGVrUmpnZlwiLFwicG9zXCI6WzEsMCwwXSxcInJhZGl1c1wiOjAuMixcImNvbG9yXCI6XCIjMmFmXCJ9LHtcImlkXCI6XCI0QWp4Y0JRRThndmx6bzNFTW1BWXhcIixcInBvc1wiOlswLDEsMF0sXCJyYWRpdXNcIjowLjIsXCJjb2xvclwiOlwiIzJhZlwifSx7XCJpZFwiOlwibklwNXQ4LU1IUEhpQ1BkV1ZpTEhfXCIsXCJwb3NcIjpbMCwxLDBdLFwicmFkaXVzXCI6MC4yLFwiY29sb3JcIjpcIiMyYWZcIn0se1wiaWRcIjpcIndRcVZlUVRGc29rVGhNMlg0NUxqRFwiLFwicG9zXCI6WzAsMSwwXSxcInJhZGl1c1wiOjAuMixcImNvbG9yXCI6XCIjMmFmXCJ9XSIsImNvbm5lY3RvcnMiOiJbe1wiaWRcIjpcInVLZHlieU54cmpNVWw4WVFBWWJXTlwiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzAuNSwwLjUsMF19LHtcImlkXCI6XCJ5NnBGSnExQmRRR21KWFdfMzVLeWZcIixcInN0YXJ0XCI6WzAsMCwwXSxcImVuZFwiOlstMC41LDAuNSwwXX0se1wiaWRcIjpcIkxMczdINjYwbFFPeVI5b1ZTMDRveVwiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzAsLTAuNSwwXX0se1wiaWRcIjpcIlFySFBnamozYjRSdlR6dVBzRVRiMVwiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzAsMSwwXX0se1wiaWRcIjpcImFUdk1oeUtJQTF1VklQYm8tc19ESFwiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzEsMCwwXX0se1wiaWRcIjpcIml0TG1NN1JSWjJJX3ZoektUQmRmYVwiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzAsMSwwXX0se1wiaWRcIjpcImFELUZ2RFpmckVIb21wblhLMEY5Z1wiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzAsMSwwXX0se1wiaWRcIjpcIkNCcnZjeS1LRmpXWHBGLThOUk8wdFwiLFwic3RhcnRcIjpbMCwwLDBdLFwiZW5kXCI6WzAsMSwwXX1dIn0=
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements, createBrowserRouter, Route, RouterProvider
} from 'react-router-dom'

import './index.css'
import App from '@/app/App.jsx'
import Modeler from '@/app/modeler/Modeler'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: 'modeler/*',
      element: <Modeler/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <h1>Hello world</h1> */}
  </React.StrictMode>
)
