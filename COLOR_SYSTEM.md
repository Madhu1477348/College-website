# Color System Documentation

## Overview
All colors for the College Website are centralized in `src/index.css` using CSS custom properties (CSS variables). This makes it easy to maintain consistency and update colors across the entire application.

## How to Use the Color System

### Method 1: Using Theme Classes (Recommended)

Wrap your page component with a theme class to automatically apply the correct color scheme:

```jsx
// BiPC.jsx Example
return (
  <div className="theme-bipc min-h-screen" style={{ background: 'var(--theme-light)' }}>
    {/* Hero Section */}
    <div className="gradient-primary text-white py-20">
      {/* Content */}
    </div>
  </div>
);
```

### Method 2: Using Inline Styles with CSS Variables

```jsx
<div style={{ 
  backgroundColor: 'var(--bipc-primary)',
  color: 'var(--text-white)'
}}>
  Content
</div>
```

### Method 3: Using Tailwind with Custom CSS Classes

You can still use Tailwind, but reference custom classes that use your CSS variables.

## Available Color Variables

### Course-Specific Themes

#### BAP (Orange/Red)
- `--bap-primary`: #ea580c (Orange)
- `--bap-secondary`: #dc2626 (Red)
- `--bap-light`: #fff7ed (Light Orange)
- `--bap-lighter`: #fef2f2 (Light Red)

**Usage**: Apply `theme-bap` class and use `var(--theme-primary)`, etc.

#### BScCS (Cyan/Blue)
- `--cs-primary`: #0891b2 (Cyan)
- `--cs-secondary`: #2563eb (Blue)
- `--cs-light`: #ecfeff
- `--cs-lighter`: #eff6ff

**Usage**: Apply `theme-cs` class

#### BZC (Green/Teal)
- `--bzc-primary`: #16a34a (Green)
- `--bzc-secondary`: #0d9488 (Teal)
- `--bzc-light`: #f0fdf4
- `--bzc-lighter`: #f0fdfa

**Usage**: Apply `theme-bzc` class

#### BiPC (Green/Emerald)
- `--bipc-primary`: #16a34a (Green)
- `--bipc-secondary`: #059669 (Emerald)
- `--bipc-light`: #f0fdf4
- `--bipc-lighter`: #d1fae5

**Usage**: Apply `theme-bipc` class

#### CEC (Amber/Yellow)
- `--cec-primary`: #d97706 (Amber)
- `--cec-secondary`: #ca8a04 (Yellow)
- `--cec-light`: #fffbeb
- `--cec-lighter`: #fef9c3

**Usage**: Apply `theme-cec` class

#### MEC (Indigo/Purple)
- `--mec-primary`: #4f46e5 (Indigo)
- `--mec-secondary`: #9333ea (Purple)
- `--mec-light`: #eef2ff
- `--mec-lighter`: #faf5ff

**Usage**: Apply `theme-mec` class

#### MPC (Blue)
- `--mpc-primary`: #2563eb (Blue)
- `--mpc-secondary`: #1d4ed8 (Dark Blue)
- `--mpc-light`: #eff6ff
- `--mpc-lighter`: #dbeafe

**Usage**: Apply `theme-mpc` class

#### MBiPC (Purple/Blue)
- `--mbipc-primary`: #9333ea (Purple)
- `--mbipc-secondary`: #2563eb (Blue)
- `--mbipc-light`: #faf5ff
- `--mbipc-lighter`: #eff6ff

**Usage**: Apply `theme-mbipc` class

#### BComCA (Purple/Pink)
- `--bcomca-primary`: #9333ea (Purple)
- `--bcomca-secondary`: #ec4899 (Pink)
- `--bcomca-light`: #faf5ff
- `--bcomca-lighter`: #fce7f3

**Usage**: Apply `theme-bcomca` class

### Common Colors

#### UI Colors
- `--success`: #16a34a (Green)
- `--warning`: #d97706 (Amber)
- `--error`: #dc2626 (Red)
- `--info`: #2563eb (Blue)

#### Text Colors
- `--text-primary`: #111827 (Dark Gray)
- `--text-secondary`: #4b5563 (Medium Gray)
- `--text-tertiary`: #6b7280 (Light Gray)
- `--text-light`: #9ca3af (Very Light Gray)
- `--text-white`: #ffffff (White)

#### Background Colors
- `--bg-white`: #ffffff
- `--bg-gray-50`: #f9fafb
- `--bg-gray-100`: #f3f4f6
- `--bg-gray-200`: #e5e7eb

#### Border Colors
- `--border-gray`: #e5e7eb
- `--border-gray-light`: #f3f4f6

## Utility Classes

### Gradient Classes
- `.gradient-primary` - Creates a gradient from primary to secondary color
- `.gradient-light` - Creates a light gradient background

### Animation Classes
- `.animate-fade-in` - Fade in animation

## Example: Converting a Component

### Before (Using Tailwind Colors):
```jsx
<div className="bg-linear-to-br from-green-50 via-white to-emerald-50">
  <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white py-20">
    <h1 className="text-green-600">Title</h1>
  </div>
</div>
```

### After (Using CSS Variables):
```jsx
<div className="theme-bipc min-h-screen" 
     style={{ background: 'linear-gradient(135deg, var(--theme-light), white, var(--theme-lighter))' }}>
  <div className="gradient-primary text-white py-20">
    <h1 style={{ color: 'var(--theme-primary)' }}>Title</h1>
  </div>
</div>
```

## Benefits

1. **Centralized Management**: All colors in one place
2. **Easy Updates**: Change colors globally by updating `index.css`
3. **Consistency**: Ensures uniform color usage across the app
4. **Theme Support**: Easy to add light/dark modes or color schemes
5. **Maintainability**: Easier for developers to understand color usage

## To Update Colors

Simply edit `src/index.css` and modify the color values in the `:root` section. All components using these variables will automatically update!
