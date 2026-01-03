
import { ReactNode } from 'react';

export enum Category {
  TEXT = 'Text Utilities',
  DEV = 'Developer Tools',
  MATH = 'Calculators',
  UNIT = 'Converters',
  GEN = 'Generators',
  NEPAL = 'Nepal Special'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  icon: ReactNode;
  tags: string[];
}

export interface SearchState {
  query: string;
  category: Category | 'All';
}
