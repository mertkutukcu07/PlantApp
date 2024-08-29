import { PaywallPlan } from '~/constants/Paywall';

export interface PaywallFeaturesType {
  value: string;
  title: string;
  description: string;
}

export interface PaywallPlanType {
  id: PaywallPlan;
  title: string;
  description: string;
  discount: boolean;
}

export const PaywallFeatures: PaywallFeaturesType[] = [
  {
    value: 'unlimited',
    title: 'Unlimited',
    description: 'Plant Identify',
  },
  {
    value: 'diagnose',
    title: 'Faster',
    description: 'Process',
  },
  {
    value: 'detailed',
    title: 'Detailed',
    description: 'Plant Care',
  },
];

export const PaywallPlans: PaywallPlanType[] = [
  {
    id: PaywallPlan.monthly,
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    discount: false,
  },
  {
    id: PaywallPlan.yearly,
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    discount: true,
  },
];
