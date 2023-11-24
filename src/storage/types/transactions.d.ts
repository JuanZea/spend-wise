import { PaymentMethods } from '@/constants';

type TransactionType = 'income' | 'expense';

export type Transaction = {
    value: number;
    type: TransactionType;
    date: Date;
    category: number;
    paymentMethod: keyof typeof PaymentMethods;
    description: string;
};