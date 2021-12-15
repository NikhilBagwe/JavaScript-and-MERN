# Web Scraping :

- It is the process of extracting data from a website and storing/displaying it in a organized format such as a Excel file or pdf file.

### Request Response Cycle :

- Your browser is the client and the website that you want to access is stored on a server.
- So when you type 'udemy.com' in your browser and press enter, the browser sends a request to udemy website's server and than in response the server sends HTML, CSS, etc. files in response.
- Then our browser parses/reads this file and displays the resulting UI to us on client side.
- NOTE : This HTML file that we get in response will help us in web scraping.

### Steps for Web Scraping :

1. Send a request to the website that you want to scrap. (using Request module in NodeJS)
2. In response you will get the HTML file.
3. Then we will parse/read that file. (using Cheerio module)
4. Then extract the required data from it. (using Cheerio module)
5. Then display it in a organized form. (convert into Excel file - use xlxs module and so on)
