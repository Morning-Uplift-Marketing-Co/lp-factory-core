# scratchpetusa — PDL Loans V3

Modern landing page template with enhanced UX and dark mode support.

## Features

- **Modern Design**: Clean, contemporary UI with smooth animations
- **Dark Mode**: Automatic dark mode support
- **Interactive Calculator**: Real-time payment estimates
- **Full Tracking**: LeadsGate AID, Voluum, GTM support
- **FAQ Accordion**: Smooth expand/collapse animations
- **Responsive**: Works perfectly on all devices

## Configuration

This template uses the following settings from Wizard:

- **Brand**: scratchpetusa
- **Domain**: scratchpetusa.com
- **Primary Color**: Royal Purple
- **Font**: DM Sans
- **Loan Range**: $100 - $5000
- **APR Range**: 5.99% - 35.99%

## Tracking Events

- `page_view` - Fired on page load
- `form_start` - Fired when form is submitted
- `generate_lead` - Conversion event

## Deploy

```bash
npm install
npm run build
# Upload dist/ folder to your host
```

## Affiliate Setup

Replace the `redirectUrl` in the script with your affiliate tracking URL:

```javascript
window.redirectUrl = "https://your-affiliate-link.com";
```
