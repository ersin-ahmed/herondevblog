HeronDev Blog

Video Demo: [Youtube Link](https://youtu.be/vUdoX6YJTu0)

Description:
This is my Blog Site made using React's NextJS with ISR (Incremental Static Regeneration) implementation, TailwindCSS and Sanity CMS as a Backend to fetch Blog Posts and store comments under blog posts. It also has SendGrip API integration to recieve emails directly from the Contact page's form.

The Home Page:
The root page of the site includes a banner with a slogan and a brand logo. Below it there's a section called Featured Posts where the site fetches from SanityCMS Blog Posts with the Boolean (featured: true) if it returns (featured: false) it won't show up on the Home Page in the Featured Posts section.

View All Posts Page:
If you wished to see all the posts the site has to offer, including the non featured posts you can click the View All Posts link styled as a button on the navbar above. It sends you to the All Posts page where it lists all the posts the site has to offer, featured or non featured as well.

Individual Posts Page:
When you click on a single post the site fetches the data from Sanity using NextJS to dynamically build the page with the specific posts data that's being fetched. Below the post data there's a Comment Section with a Form that you can use to leave a commment. Once it has been submitted, it needs to be approved from SanityCMS and after that it will show up below.

About Page:
This page contains information about the owner/founder of this site (me).

Contact Page:
This page includes a Form for sending messages to the owner of the site. It uses SendGrip API to handle sending the message as an Email to the reciever.

Deployment:
This site was deployed using Vercel.

The official link is : https://herondevblog.com/
