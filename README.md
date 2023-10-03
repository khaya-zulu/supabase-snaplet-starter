<a href="https://www.snaplet.dev/">
  <img width="935" alt="Next.js 13 and app template Router-ready Supabase starter kit." src="https://github.com/khaya-zulu/supabase-snaplet-starter/assets/39437696/5740061e-c3f5-42f4-968a-f49e3a45663b">
  <h1 align="center">Supabase + Snaplet starter kit</h1>
</a>

<p align="center">
  This starter is a clone of NextJS and Supabase <a href="https://vercel.com/templates/next.js/supabase">starter</a>, showing how you can use Snaplet to seed your Supabase local development stack.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#how-to-use"><strong>How to use</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
</p>
<br/>

## Features

On top of everything included in the [starter](https://vercel.com/templates/next.js/supabase).

- Use the [generate command](https://docs.snaplet.dev/references/data-operations/generate/) to create 20 todo items.
- A base config for transformations (excluding `storage` & `supabase_functions` schemas)

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user's%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, [follow the steps below](#how-to-use).

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app -e with-supabase
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

4. Link your project

   ```bash
   supabase link --project-ref= # Project Settings > Reference ID
   ```

5. Start your local stack

   ```bash
   supabase start
   ```

6. Check out this guide we wrote on how to clone the start and get a Snaplet config inside your project.

7. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

8. Run the app.

   ```
   npm run dev
   ```

## How to use

- Navigate to the root path (`/`) and log in.
- Once you have completed the guide you can view the generated `todos` at the `/todos` path.

## Feedback and issues

Please file feedback and issues over on our [discord](https://app.snaplet.dev/chat)
