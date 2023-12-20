import axios from "axios";
// import cheerio   from "cheerio";
import * as cheerio from 'cheerio';
 //const cheerio=require("cheerio");


const url="https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
async function getMain(){
try{
const response=await axios.get(url);
const $= cheerio.load(response.data)
const main=$("h1").text();
console.log(main);

}
catch(error){
    console.error(error);
}

}

getMain();