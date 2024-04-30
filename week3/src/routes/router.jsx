import { createBrowserRouter } from 'react-router-dom';
// import HomeRecoil from '@/pages/HomeRecoil'; //Recoil버전을 확인해보세요 :)
//import HomeJotai from '@/pages/HomeJotai'; //Jotai버전을 확인해보세요 :)
import HomeZustand from '@/pages/HomeZustand'; //Zustand버전을 확인해보세요 :)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeZustand />,
  },
]);
