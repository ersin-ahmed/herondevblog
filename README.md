HeronDev Blog

Video Demo: [Youtube Link](https://youtu.be/vUdoX6YJTu0)

Description:
This is my Blog Site made using React's NextJS with ISR (Incremental Static Regeneration) implementation, TailwindCSS and Sanity CMS as a Backend to fetch Blog Posts and store comments under blog posts. It also has SendGrip API integration to recieve emails directly from the Contact page's form.

The Home Page:
The root page of the site includes a banner with a slogan and a brand logo.
Below it there's a section called Featured Posts where the site fetches from SanityCMS Blog Posts with the Boolean (featured: true) if it returns (featured: false) it won't show up on the Home Page in the Featured Posts section.

View All Posts Page:
If you wished to see all the posts the site has to offer, including the non featured posts you can click the View All Posts link styled as a button on the navbar above.
It sends you to the All Posts page where it lists all the posts the site has to offer, featured or non featured as well.

Individual Posts Page:
When you click on a single post the site fetches the data from Sanity using NextJS to dynamically build the page with the specific posts data that's being fetched.
Below the post data there's a Comment Section with a Form that you can use to leave a commment.
Once it has been submitted, it needs to be approved from SanityCMS and after that it will show up below.

About Page:
This page contains information about the owner/founder of this site (me).

Contact Page:
This page includes a Form for sending messages to the owner of the site.
It uses SendGrip API to handle sending the message as an Email to the reciever.

Layout:
There's a layout file that includes the Navbar and the Footer and wraps it around the whole page.

Enivronment Variables:
If you wished to build this project on your machine locally, you need to provide some Enivronment Variables for SanityCMS and SendGrid API

Deployment:
This site was deployed using Vercel.

Technologies used:

About NextJS: -----

Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

About Tailwind: -----

Tailwind CSS is an open source CSS framework.
The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.

The official link is : https://herondevblog.com/

About Sanity: -----

What is Sanity used for?
Sanity.io is the platform for structured content.
With Sanity.io you can manage your text, images, and other media with APIs.
You can also use the open-source single page application Sanity Studio to quickly set up an editing environment that you can customize.

About SendGrid: -----

SendGrid is a Denver, Colorado-based customer communication platform for transactional and marketing email.
The company was founded by Isaac Saldana, Jose Lopez, and Tim Jenkins in 2009, and incubated through the Techstars accelerator program.
SendGrid's web API allows our customers to pull information about their email program without having to actually log on to SendGrid.com.
Customers can pull lists, statistics, and even email reports.
In addition to this, Customers can send email via the web API without using traditional SMTP.
