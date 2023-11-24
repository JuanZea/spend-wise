import { Screen, Button } from '@elements';
import { Routes } from '@/constants';

export default function Page() {
    return (
        <Screen>
            <Button route={Routes.information.path}>{Routes.information.name}</Button>
            <Button route={Routes.tipsCalculator.path}>{Routes.tipsCalculator.name}</Button>
        </Screen>
    );
}
