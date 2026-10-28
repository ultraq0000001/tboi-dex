import type { GameObject } from '../types/object';

export const gameObjects: GameObject[] = [
  {
    id: 'object_altar',
    name: 'Altar',
    description: 'A donation machine found in shops.',
    iconKey: '',
  },
  {
    id: 'object_arcade',
    name: 'Arcade',
    description: 'A gambling machine found in shops.',
    iconKey: '',
  },
  {
    id: 'object_beggar',
    name: 'Beggar',
    description: 'A street beggar found in shops.',
    iconKey: '',
  },
  {
    id: 'object_blood_donation_machine',
    name: 'Blood Donation Machine',
    description: 'A machine that exchanges health for coins.',
    iconKey: '',
  },
  {
    id: 'object_bomb_shell',
    name: 'Bomb Shell',
    description: 'A shell that can be blown up for rewards.',
    iconKey: '',
  },
];

export type { GameObject };
