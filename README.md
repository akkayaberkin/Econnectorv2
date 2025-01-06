# GanBrid - E-commerce Integration Platform

GanBrid is an integration platform that allows you to manage different e-commerce platforms (Trendyol, Hepsiburada, N11) from a single dashboard.

## Features

- **Multi-Platform Integration**: Manage Trendyol, Hepsiburada, and N11 platforms from a single panel
- **Real-Time Monitoring**: Track sales, orders, and inventory in real-time
- **Analytics Dashboard**: Sales performance and revenue analytics
- **Multi-Language Support**: Turkish and English language options
- **Modern Interface**: Material-UI based modern and user-friendly design

## Tech Stack

- Next.js 12
- TypeScript
- Material-UI v5
- Redux Toolkit (State Management)
- i18next (Internationalization)
- ApexCharts (Charts)

## Installation

1. Clone the project:

```bash
git clone [repo-url]
cd typescript-version
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Start the development server:

```bash
npm run dev
```

4. Open in your browser:

```
http://localhost:3000
```

## Project Structure

```
typescript-version/
├── public/                 # Static files
│   ├── images/            # Image files
│   └── locales/           # Language files
├── src/
│   ├── @core/            # Core components
│   ├── configs/          # Configuration files
│   ├── layouts/          # Page layouts
│   ├── navigation/       # Navigation configuration
│   ├── pages/            # Next.js pages
│   ├── store/            # Redux store configuration
│   └── views/            # Page components
```

## Pages

- **Dashboard**: Overview and summary information
- **Analytics**: Detailed sales and performance analytics
- **Orders**: Order management
- **Products**: Product management
- **Finance**: Financial reports and analytics
- **Customers**: Customer management
- **Account Settings**: Account configuration

## Development

- Uses Prettier for code formatting
- ESLint for code quality control
- TypeScript for type safety

## Building

To build the project for production:

```bash
npm run build
```

To start the production build:

```bash
npm start
```

## License

This project is licensed under the MIT License.
