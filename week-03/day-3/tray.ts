import { Cookie } from './cookie';
'use strict'

class Tray {
  remainingCapacity: number;
  cookies: Cookie[];

  constructor(cookies: Cookie[]) {
    this.cookies = cookies;
    this.remainingCapacity = 24 - cookies.length;

  }

  putCookiesOnTray(cookie: Cookie): void{
    this.cookies.push(cookie)
    console.log('Cookie is on Tray!');
  }

  bakeMyCookies() {
    this.cookies.forEach(singleCookie => {
      singleCookie.setCondition('Baked for perfection!');
    })
    console.log('all done!')
  }
}

const myFirstTray: Tray = new Tray([]);

const myFirstCookie: Cookie = new Cookie('vanilla', 'elephant', false, 12)
const reallyBoringCookie: Cookie = new Cookie();

myFirstTray.putCookiesOnTray(myFirstCookie)
myFirstTray.putCookiesOnTray(reallyBoringCookie)
console.log(myFirstTray)