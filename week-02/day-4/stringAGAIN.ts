'use strict'
export{}

function addStar(str: string): string {
    if (str.length === 1) {
       return str;
   }
   else {
       return (str[0]+'*').concat(addStar(str.slice(1,str.length)))
       }
}
console.log(addStar('wjhvjsfsk'));