import type { Pickup } from '../types/pickup';

export const pickups: Pickup[] = [
  {
    id: 'pickup_coin',
    name: 'Coin',
    description: 'Penny used to buy items in shops.',
    iconKey: '',
  },
  {
    id: 'pickup_heart',
    name: 'Heart',
    description: 'Restores one red heart container.',
    iconKey: '',
  },
  {
    id: 'pickup_bomb',
    name: 'Bomb',
    description: 'Explosive used to break walls and damage enemies.',
    iconKey: '',
  },
  {
    id: 'pickup_key',
    name: 'Key',
    description: 'Unlocks doors and chests.',
    iconKey: '',
  },
  {
    id: 'pickup_battery',
    name: 'Battery',
    description: 'Recharges active items.',
    iconKey: '',
  },
];

export type { Pickup };
