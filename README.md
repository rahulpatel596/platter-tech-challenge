# Platter Technical Challenge
Author: Rahul Patel

[Web Preview](https://rahulpatel596.github.io/platter-tech-challenge/)

[Shopify Store](https://iq9eqf-xf.myshopify.com/)

Shopify store password - platter123

Additional Notes:

- TailwindCSS loaded using CDN, I understand which is not the optimal way to load it. In production, we would use better build setup along with bundlers(vite, webpack etc.) to reduce the size.
- I have added product images inside the codebase as we do not have large number of images. Not a good idea in real project as it would increase the size of the codebase. In production we would use some CDN or some external service. In case of shopify, we can use shopify images directly.
- Shopify version of the code might not be the most optimal code, there were some changes and tweaks I had to make to add show-more button feature for mobile device.
- For Shopify theme code, in production I would also split up file into separate piece. May be create a separate Product Card, Badge etc. to make sure it is reusable and modular.
- All JavaScript and CSS is included inline within the Shopify section file. It works, but it's not always ideal for long-term maintainability. I was getting some breaking issue, so I have kept eveything in single file.
- Dynamic review counts and ratings can be further enhanced using Shopify metafields or tags or third party app.
- There is also some repetitive code in Shopify version due to limitations in Liquid templating.
  
