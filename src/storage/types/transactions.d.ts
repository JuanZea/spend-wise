import { PaymentMethods } from '@/constants';

type TransactionType = 'income' | 'egress';

export type Transaction = {
    id: number;
    name: string;
    amount: number;
    type: TransactionType;
    date: Date;
    category: number;
    paymentMethod: keyof typeof PaymentMethods;
    description?: string;
};