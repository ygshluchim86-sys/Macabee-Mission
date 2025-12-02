# The Maccabee's Mission - Website Setup

## 1. Shopify Integration
To make the "Order Now" button work, you need to generate a Buy Button in your Shopify Admin and update `index.html`.

1.  **Log in to Shopify Admin.**
2.  Go to **Sales Channels > Buy Button**.
3.  Click **Create a Buy Button**.
4.  Select **Product Buy Button** and choose "The Maccabee's Mission" product.
5.  Customize the style if you want (though the site has custom CSS for it).
6.  Click **Next** and copy the code.
7.  **CRITICAL STEP**: You don't need the whole code block. You just need 3 things from it to update `index.html`:
    *   `domain`: (e.g., `your-store.myshopify.com`)
    *   `storefrontAccessToken`: (a long string of characters)
    *   `id`: (the product ID)

Open `index.html` and look for the `ShopifyBuy.buildClient` section at the bottom. Replace the placeholders with your actual values.

## 2. Customization
-   **Images**: The flyer is located in `assets/flyer.jpg`. You can replace this file with a higher resolution version if needed.
-   **Text**: Edit `index.html` to change the price, phone number, or descriptions.

## 3. Deployment
This is a static HTML site. You can host it on:
-   GitHub Pages
-   Netlify (Drag and drop the `maccabees_mission` folder)
-   Vercel
-   Any standard web host
