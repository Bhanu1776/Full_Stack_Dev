//* Event Bubbling | Capturing | Delegation 
//! Very Imp

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//* capturing events
child.addEventListener(
    "click",
    () => {
        console.log("capture !!!! child");
    },
    true
);
parent.addEventListener(
    "click",
    () => {
        console.log("capture !!!! parent");
    },
    true
);
grandparent.addEventListener(
    "click",
    () => {
        console.log("capture !!!! grandparent");
    },
    true
);
document.body.addEventListener(
    "click",
    () => {
        console.log("capture !!!! document.body");
    },
    true
);

//* not capture(Bubbling)

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
parent.addEventListener("click", () => {
    console.log("bubble parent");
});
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });



//* Event Delegation (VIP) (Generally used in projects for better Event implementation)
grandparent.addEventListener("click", (e) => {
    console.log(e.target);
});

//* For better understanding refer this video: https://youtu.be/Llsq1y-HWs4?t=26562