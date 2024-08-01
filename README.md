# MERN Food Ordering App - Frontend

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack and Important Dependencies](#tech-stack-and-important-dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

### Introduction

I dedicated significant effort to this personal project, which has provided me with a deep understanding of frontend development, particularly with React and TypeScript. This project has been instrumental in honing my skills in structuring React applications effectively and leveraging the benefits of TypeScript. 

The primary objectives of this project were to write clean, structured, and efficient code for both the frontend and backend components, ensuring seamless integration and functionality. Additionally, I aimed to learn and master the deployment process across various platforms, including Render, Netlify, and Vercel.

This project also serves as a blueprint for my future endeavors, enabling me to work more efficiently with a well-understood structure and codebase. This experience has not only improved my proficiency but also provided a foundation that I can apply in professional settings.

I am open to discussions and feedback on how to further improve this code. In the following sections, I will explain how to set up and run this project on your own machine, and provide an overview of its code structure, with a focus on the separation of concerns.

## Features
The frontend of the MERN Food Ordering App includes the following features:

- Authentication with Auth0: Secure and seamless user authentication using Auth0.
- User and Restaurant Profiles: Users can set up and manage their personal profiles and restaurant details.
- Order Management: A form for logged-in users to manage orders placed at their restaurant.
- Restaurant Browsing: Browse and explore restaurants in a specified city with advanced filtering and sorting options.
- Menu and Cart Integration: View restaurant menus, add items to the cart, and use Stripe for secure payment processing.

### Tech Stack and Important Dependencies
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Query**: For asynchronous data fetching and state management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Hook Form**: For form handling and validation.
- **Zod**: For schema validation and error handling.
- **Stripe**: For payment processing.
- **Shadcn-UI**: A library for UI components.
- **React Router**: For client-side routing.
- **Vite**: For building and bundling the React application.
- **Sonner**: For displaying toastr messages.
- **Lucide React**: For displaying icons.

## Setup Instructions

For logical reasons, please set-up backend project first, then this one.
To get the frontend up and running locally, follow these steps:


### Prerequisites
- [Node.js](https://nodejs.org/) (v20.9.0 version is stable, may work on lower versions also)
- npm (10.1.0 version is stable, may work on lower versions also)

### Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/tajsonbg/mern-food-ordering-app-frontend.git
```

### Navigate to the Project Directory
Change to the project directory using the following command:
```bash
cd mern-food-ordering-app-frontend
```

### Install Dependencies
Install the required dependencies using npm or Yarn:
```bash
npm install
# or
yarn install
```

### Setup Environment Variables
Create a .env file by copying the .env.example file:
```bash
cp .env.example .env
```
Update the environment variables in the .env file with your actual credentials and configuration settings:
#1: Go to https://auth0.com/ and make an account.

#2: Click create application and select Single Page Web Application ![image](https://github.com/user-attachments/assets/0eca6c8e-a64f-4e8b-bc40-075a230e516d)

#3: Select React and go to setting and paste info ![image](https://github.com/user-attachments/assets/925a8736-bd58-4f01-90a5-6ae5b914a745)

#4: Scroll down to Application URIs and populate fields like this (this is default for this app, if u change port change it aswell) ![image](https://github.com/user-attachments/assets/7280d764-2adf-4339-b614-4191f240e26b)


.env.example
```bash
#Copy content from this file and create your own .env file in a root folder then paste it and follow the next step
#These are only placeholders, make sure to populate everything with your own data so every feature can work.

#Base url for making backend calls
VITE_API_BASE_URL=http://localhost:7000 #this is default for this app, if u change localhost port, change it here also

#Auth0 config detaials you can get from Auth0 project
VITE_AUTH0_DOMAIN=your_auth0_domain #lookup screenshot #3
VITE_AUTH0_CLIENT_ID=your_auth0_client_id #lookup screenshot #3
VITE_AUTH0_CALLBACK_URL=http://localhost:5173 #this is default for this app, if u change localhost port, change it here also
VITE_AUTH0_AUDIENCE=your_auth0_audience #this should be same as AUTH0_AUDIENCE in backend project
```

### Run the Development Server
Start the development server:
```bash
npm run dev
```









