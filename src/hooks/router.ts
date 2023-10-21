import { useNavigate as useNavigateRRN } from 'react-router-native';
import { ROUTE_NAMES } from '@/constants';

export const useNavigate = () => {
    const navigate = useNavigateRRN();

    const toWrapper = (path: '/' | ROUTE_NAMES) => (options?) => {
        navigate('/', { replace: true });
        navigate(String(path), options);
    };

    const to = (path: '/' | ROUTE_NAMES, options?) => {
        navigate('/', { replace: true });
        navigate(String(path), options);
    };
    const toHome = toWrapper('/');
    const toSettings = toWrapper(ROUTE_NAMES.settings);
    const toBudget = toWrapper(ROUTE_NAMES.budget);
    const toCategories = toWrapper(ROUTE_NAMES.categories);
    const toInformation = toWrapper(ROUTE_NAMES.information);
    const toTipsCalculator = toWrapper(ROUTE_NAMES.tipsCalculator);
    const toMore = toWrapper(ROUTE_NAMES.more);

    return { to, toHome, toSettings, toBudget, toCategories, toInformation, toTipsCalculator, toMore };
};
