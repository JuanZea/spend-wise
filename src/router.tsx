import { createMemoryRouter } from 'react-router-native';
import { BudgetsPage, CategoriesPage, HomePage, InformationPage, TipsPage, SettingsPage, MorePage } from '@/components/pages';
import { MainTemplate } from '@/components/templates';
import { ROUTE_NAMES } from '@/constants';

export const ROUTES = {
    [ROUTE_NAMES.home]: {
        index: true,
        element: <HomePage />,
    },
    [ROUTE_NAMES.budget]: {
        path: `/${ROUTE_NAMES.budget}`,
        element: <BudgetsPage />,
    },
    [ROUTE_NAMES.categories]: {
        path: `/${ROUTE_NAMES.categories}`,
        element: <CategoriesPage />,
    },
    [ROUTE_NAMES.information]: {
        path: `/${ROUTE_NAMES.information}`,
        element: <InformationPage />,
    },
    [ROUTE_NAMES.tipsCalculator]: {
        path: `/${ROUTE_NAMES.tipsCalculator}`,
        element: <TipsPage />,
    },
    [ROUTE_NAMES.settings]: {
        path: `/${ROUTE_NAMES.settings}`,
        element: <SettingsPage />,
    },
    [ROUTE_NAMES.more]: {
        path: `/${ROUTE_NAMES.more}`,
        element: <MorePage />,
    },
};

export const ROUTE_PATHS = Object.keys(ROUTES).reduce((acc, key) => {
    acc[key] = ROUTES[key].path;
    return acc;
}, {} as Record<keyof typeof ROUTES, string>);

const routes = Object.keys(ROUTES).map((key) => ({
    index: ROUTES[key].index,
    path: ROUTES[key].path,
    element: ROUTES[key].element,
}));

export const router = createMemoryRouter([
    {
        path: '/',
        element: <MainTemplate />,
        children: routes,
    },
]);
