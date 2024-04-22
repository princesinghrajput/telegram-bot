const axios = require('axios');
const { Telegraf } = require('telegraf')


let binarySearch= `

// C++ program to implement iterative Binary Search
#include <bits/stdc++.h>
using namespace std;

// An iterative binary search function.
int binarySearch(int arr[], int l, int r, int x)
{
    while (l <= r) {
        int m = l + (r - l) / 2;

        // Check if x is present at mid
        if (arr[m] == x)
            return m;

        // If x greater, ignore left half
        if (arr[m] < x)
            l = m + 1;

        // If x is smaller, ignore right half
        else
            r = m - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

// Driver code
int main(void)
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1)
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}

`;

// ! Token : 7151527586:AAF--bCOAyJUKz6j7S9OBRbZa_EGoRRBhFs

const bot = new Telegraf("7151527586:AAF--bCOAyJUKz6j7S9OBRbZa_EGoRRBhFs");


bot.start((ctx) => ctx.reply('Welcome to the new coding bot from Prince!'));

//! can write command
bot.command('binarySearch', (ctx)=>ctx.reply(binarySearch))


bot.command('AnyBaseToDecimal', async function (ctx){
   const response= await axios.get('https://raw.githubusercontent.com/princesinghrajput/DSA_Java_question/main/AnyBaseToDecimal.java');
    console.log(response.data);
    return ctx.reply(response.data);

})


bot.command('whomadethis', (ctx)=>ctx.reply('Prine singh Rajput💖'))
//? On Sticker--- Evenet based Programming....

bot.on('sticker', (ctx) => ctx.reply('🚀'));


bot.launch();

