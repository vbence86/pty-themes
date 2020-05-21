import heroic from './html/template-heroic.html.js';
import modernBusiness from './html/template-modern-business.html.js';
import smallBusiness from './html/template-small-business.html.js';
import fourofour from './html/template-404.html.js';
import servicesPage from './html/template-services-page.html.js';
import aboutPage from './html/template-about.html.js';
import contactPage from './html/template-contact.html.js';
import faq from './html/template-faq.html.js';
import sidebar from './html/template-sidebar.html.js';

export default { title: 'Templates' };

export const Heroic = () => heroic;

export const ModernBusiness = () => modernBusiness;

export const SmallBusiness = () => smallBusiness;

export const Error404 = () => fourofour;

export const ServicesPage = () => servicesPage;

export const AboutPage = () => aboutPage;

export const FAQ = () => faq;

export const Sidebar = () => sidebar;

