import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routesPath';
import DefaultLayout from '~/components/modules/Layout/DefaultLayout';

const Router: React.FC = () => {
  return (
    <Routes>
      {routes.map((item, index) => {
        const Component: React.FC = item.component;
        const Layout = DefaultLayout;
        const Page = item.component;
        return (
          <Route
            key={index}
            path={item.path}
            element={
              item.private ? (
                <Component />
              ) : (
                <Layout>
                  <Page />
                </Layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default Router;
