function bookPurchasing(book, tax, discount)
{
    let result = 0;
    if(book && book.price)
    {
        const price = book.price; // harga
        const totaldiscount = price *(discount/100); // total diskon
        const priceafterdiscount = price - totaldiscount; // harga setelah diskon
        const tax1 = priceafterdiscount * (tax/100); // pajak
        const priceaftertax = priceafterdiscount - tax1; // harga setelah pajak
        console.group();
        console.log('Title : The Adweek of Copywriting Handbook');
        console.log('Price : RP.', price);
        console.log(`Discount Percentage : `, discount,'%');
        console.log('Tax Percentage : ', tax,'%');
        console.log('Price After Discount : Rp.', priceafterdiscount);
        console.log(`Tax Price : Rp. `, tax1);
        console.log('Price After Tax : Rp.', priceaftertax);
        console.groupEnd();
    }
    return result;
}
bookPurchasing({Title : 'The Adweek of Copywriting Handbook', price: 2000000}, 20, 10);