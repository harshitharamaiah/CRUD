import axios from "axios";
// const axios=require("axios");
// import * as cheerio from 'cheerio';

const Mystery="https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
const book_data=[]

async function getBooks(url){
try{
const response=await axios.get(url);
const $=cheerio.load(response.data);

const books=$("article");
books.each(function(){
    title=$(this).find("h3 a").text();
    price=$(this).find(".price_color").text();
    stock=$(this).find(".availability").text().trim();


    book_data.push({title,price,stock})
});
console.log(book_data);

}
catch(error){
    console.error(error);
}

}

getBooks(Mystery);