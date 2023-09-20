This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**See package.json for full list of commands**

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (>=18.17.1)
- npm (>=9.6.7)

### Installation & Setup

1. Download [`.env.local`](https://drive.google.com/drive/folders/1Mx231NNCxOlgj50SCO9v4FwHHe73eDxR?usp=drive_link) file and put into your root folder

   ```
   /code
   |   .env.local  #It contains JWT Secret & MongoDB verification
                   #Avoid sensitive data exposure
   ```

2. Below is the shell command that you need to install the library before you running the servers:
   ```sh
   npm install
   ```
3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Endpoints

### User Registration

- URL: `/api/registerUser `
- Method: `POST`
- Response: {String} Message: "User registered"

### Auth

**URL:** `/api/auth/signin`

| Method | Parameters       | Response         |
| ------ | ---------------- | ---------------- |
| POST   | @email @password | User Information |
| GET    | N/A              | SignOut Session  |
