<p align="center">
<img src="https://i.ibb.co/qW0Zfdp/Group-14.png" alt="meetUps" >
</p>

<p id="description">This project displays meetups by city and theme. Users can sign up to attend these events, which facilitates the connection between people with similar interests and the creation of vibrant communities.</p>

<h2>〽️ Demo</h2>

[MeetUps](https://meet-ups-wheat.vercel.app/)

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone repository</p>

```
git clone https://github.com/NachoVBordera/MeetUps.git
```

<p>2. Install dependencies</p>

```
npm install
```

or

```
pnpm install
```

<p>3. Project Setup</p>

To make the project work, you need to have accounts on **Supabase** and **Clerk**.

Within **Supabase**, it is crucial to have a database with the following tables:

- `meetUps` with the fields:

  - `id`
  - `created_at`
  - `user_id`
  - `description`
  - `location`
  - `photo`
  - `title`
  - `subject`
  - `date`
  - `user_name`
  - `user_image`
    <br/>

- `meets_users` with the fields:

  - `id`
  - `user_id`
  - `meet_id`
  - `user_profile_img`
  - `user_name`

Remember to configure Row-Level Security (RLS) policies to ensure data security and proper access.

<p>5.ENV File</p>

This project requires the following environment variables to be set in your `.env` file:

- `VITE_REACT_APP_CLERK_PUBLISHABLE_KEY`: Your Clerk Publishable Key.
- `VITE_REACT_APP_SUPABASE_KEY`: Your Supabase Key.
- `VITE_REACT_APP_DATABASE_URL`: Your Database URL.
- `VITE_REACT_APP_IMAGE_BASE_URL`: Your Image Base URL.
- `VITE_REACT_APP_DEFAULT_PHOTO`: Your Default Photo URL.

Make sure to replace the placeholders with the actual values for your project configuration. These values should match the settings you are using in your project

<p>5. Run project</p>

```
npm run start
```

or

```
pnpm run start
```

<h2>💻 Built with</h2>

Technologies used in the project:

- React
- TypeScript
- Clerk
- Supabase
- Vite

<p align="center"><img src="https://img.shields.io/badge/MADE_WITH_%E2%9D%A4%EF%B8%8F_BY_NACHO-bb69ff" alt="shields"></p>
