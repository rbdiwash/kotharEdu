# TaxBanner Component

A customizable full-page banner component that appears as a modal overlay to promote tax services.

## Features

- ✅ Full-page overlay with semi-transparent background
- ✅ Appears when website loads (with 1-second delay)
- ✅ Large clickable image that redirects to a specified link
- ✅ Support for both custom images and emojis
- ✅ Close button to dismiss the banner
- ✅ Remembers if user closed it (stored in localStorage)
- ✅ Smooth animations and transitions
- ✅ Responsive design with mobile-first approach
- ✅ Customizable content and styling
- ✅ Action buttons for better user interaction

## Usage

### Basic Usage

```jsx
import TaxBanner from "./Components/TaxBanner";

// In your App.js or main component
<TaxBanner />;
```

### With Custom Image

```jsx
<TaxBanner
  imageUrl="/path/to/your/image.jpg"
  redirectLink="/custom-tax-page"
  title="Custom Tax Services"
  description="Your custom description here"
  localStorageKey="customBannerClosed"
/>
```

### With Emoji Only

```jsx
<TaxBanner
  imageEmoji="💼"
  redirectLink="/business-services"
  title="Business Services"
  description="Professional business consulting services"
  localStorageKey="businessBannerClosed"
/>
```

## Props

| Prop              | Type   | Default                                                                            | Description                                               |
| ----------------- | ------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `redirectLink`    | string | `"/tax-calculator"`                                                                | The URL to redirect to when the image is clicked          |
| `title`           | string | `"Tax Services for FY 2024-25"`                                                    | The main heading text                                     |
| `description`     | string | `"Get expert tax assistance and use our tax calculator for accurate calculations"` | The description text                                      |
| `imageEmoji`      | string | `"💰"`                                                                             | The emoji to display (used when imageUrl is not provided) |
| `imageUrl`        | string | `null`                                                                             | The URL of the image to display (overrides imageEmoji)    |
| `localStorageKey` | string | `"taxBannerClosed"`                                                                | The localStorage key to remember if banner was closed     |

## Design Features

### Full-Page Overlay

- Covers the entire viewport with a semi-transparent black background (`bg-opacity-50`)
- Centered modal-style content card
- High z-index (50) to appear above all other content

### Large Image Display

- **Size**: 256x256px on mobile, 320x320px on desktop (16rem x 16rem / 20rem x 20rem)
- **Shape**: Rounded rectangle (rounded-2xl)
- **Hover Effect**: Slight scale increase (hover:scale-105)
- **Image Handling**: Uses `object-cover` for proper image scaling
- **Fallback**: Shows large emoji if no image URL is provided

### Visual Design

- Clean white card with rounded corners and shadow
- Gradient background on the image container (primary to primary2 colors)
- Responsive layout that adapts to mobile and desktop
- Smooth hover effects and transitions

### User Experience

- Two action buttons: "Explore Tax Services" and "Maybe Later"
- Clear visual hierarchy with title, description, and call-to-action
- Accessible with proper ARIA labels
- Keyboard navigation support

## Styling

The banner uses the project's color scheme:

- Primary colors: `primary` (#ED6A06) and `primary2` (#FFAB6B)
- Semi-transparent black overlay: `bg-black bg-opacity-50`
- White content card with subtle shadows
- Gray text for secondary information

## Behavior

1. **Appearance**: Banner appears 1 second after page load
2. **Persistence**: If user closes the banner, it won't show again (stored in localStorage)
3. **Responsive**: Adapts to different screen sizes with mobile-first design
4. **Accessibility**: Includes proper ARIA labels and keyboard navigation
5. **Interactions**: Multiple ways to interact (image click, action buttons, close button)

## Integration

The banner is already integrated into the main App.js file and will appear on all pages. It's positioned with a high z-index (50) to ensure it appears above other content.

## Customization Examples

### Tax Services with Image

```jsx
<TaxBanner
  imageUrl="/assets/images/tax-services.jpg"
  redirectLink="/tax-calculator"
  title="Tax Services for FY 2024-25"
  description="Get expert tax assistance and use our tax calculator for accurate calculations"
  localStorageKey="taxBannerClosed"
/>
```

### Immigration Services

```jsx
<TaxBanner
  imageUrl="/assets/images/immigration.jpg"
  redirectLink="/immigration-services"
  title="Immigration Services Available"
  description="Get expert help with your visa applications and immigration needs"
  localStorageKey="immigrationBannerClosed"
/>
```

### Seasonal Promotion

```jsx
<TaxBanner
  imageUrl="/assets/images/offer.jpg"
  redirectLink="/seasonal-offer"
  title="Limited Time Offer - 20% Off"
  description="Book your tax consultation before the end of the month and save 20%"
  localStorageKey="seasonalBannerClosed"
/>
```

### Educational Services with Emoji

```jsx
<TaxBanner
  imageEmoji="🎓"
  redirectLink="/education-services"
  title="Study Abroad Opportunities"
  description="Discover top universities and courses for international students"
  localStorageKey="educationBannerClosed"
/>
```

## Image Requirements

When using the `imageUrl` prop:

- **Format**: JPG, PNG, WebP, or any web-compatible image format
- **Size**: Recommended minimum 400x400px for best quality
- **Aspect Ratio**: Square images work best, but any ratio will be cropped to fit
- **File Size**: Keep under 500KB for fast loading
- **Path**: Use relative paths from the public folder (e.g., `/images/tax.jpg`)
