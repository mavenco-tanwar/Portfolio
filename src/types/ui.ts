export type ThemeMode = 'midnight' | 'cyber-violet' | 'high-contrast-light';

export interface MetricStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export interface NavItem {
  label: string;
  href: string;
}
