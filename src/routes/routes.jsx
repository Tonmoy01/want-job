import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import SingleJob from '../pages/singleJob/SingleJob';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: '/jobs/:jobId',
            element: <SingleJob />
          }
        ],
      },
    ],
  },
];

export default routes;
