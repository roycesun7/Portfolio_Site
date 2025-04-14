import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize('G-198X1DGEMT');
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track events
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
}; 