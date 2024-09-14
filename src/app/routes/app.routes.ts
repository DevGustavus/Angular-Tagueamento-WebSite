import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./../pages/home/home.component').then((c) => c.HomeComponent),
    title: 'WebSite | Home',
  },
  {
    path: 'donation',
    loadComponent: () =>
      import('./../pages/donation/donation.component').then((c) => c.DonationComponent),
    title: 'WebSite | Donation',
  },
];
