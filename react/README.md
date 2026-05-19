# Marc Attendance Frontend

Frontend application for the Marc Attendance system.

This project is built with React and Vite and provides a web interface for managing school attendance data. The app includes screens for authentication, students, attendance, teachers, departments, devices, personal information, and reports.

## Getting Started
You need :
- Node.js
- npm

### Install dependencies

```bash
cd react
```

then run:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start the app locally and print the URL in the terminal.


## Features

- Authentication pages for login, registration, forgot password, and reset password
- Protected dashboard area with a shared dashboard layout
- Student management pages
- Attendance overview and attendance logs
- Teacher management pages
- Department management pages
- Device management pages
- Reports pages, including MARS reports and attendance-related reports
- Reusable UI components such as buttons, cards, inputs, tables, search bars, selects, and pagination

## Project Structure

The main source code lives in the `src/` folder:

- `components/` - shared UI components and layout components
- `config/` - app configuration files
- `constants/` - shared constants used across the app
- `context/` - app-wide React context providers
- `features/` - feature-based modules for auth, students, teachers, attendance, departments, devices, reports, and personal information
- `hooks/` - reusable custom hooks
- `routes/` - application route definitions
- `services/` - API and request helpers
- `styles/` - global and feature styles
- `utils/` - helper functions and formatting utilities

## Routing Overview

The app uses React Router with two main route groups:

### Authentication routes

Defined in `src/routes/AuthRoutes.jsx`:

- `/` - login page
- `/register` - create account page
- `/forgot-password` - forgot password page
- `/reset-password` - reset password page

### Dashboard routes

Defined in `src/routes/DashboardRoutes.jsx` and wrapped in the dashboard layout:

- students pages
- attendance pages
- teacher pages
- department pages
- device pages
- report pages

The main router is defined in `src/routes/AppRoutes.jsx`.

## Notes

- The project uses absolute imports with the `@/` prefix.
- The app is organized by feature, which makes it easier to maintain and scale.
- API requests are handled through service files inside `src/services/` and feature-specific service files.
- Some pages may still be under active development.

## License

No license file is currently included in this repository.
