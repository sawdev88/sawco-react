export function smoothScroll(eID) {
    let startY = window.pageYOffset
    let stopY = eID;
    let distance = stopY > startY ? stopY - startY : startY - stopY;

    if (distance < 100) {
        window.scrollTo(0, stopY); return;
    }

    let speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;

    if (stopY > startY) {
        for (let i=startY; i<stopY; i+=step) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }

    for (let i=startY; i>stopY; i-=step) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }

  return false;
}
