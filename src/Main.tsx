import { RouterProvider } from 'react-router-native';
import { router } from './router';

export default function Main() {
    return <RouterProvider router={router} />;
}
