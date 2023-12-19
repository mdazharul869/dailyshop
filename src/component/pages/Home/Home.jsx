/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "../../../ClickTabFileCss/ClickTabDileOpen.scss";
import HomeHeader from "../HeaderCustom/HomeHeader";
import MainMessage from "../Message/MainMessage";
import FastCategory from "./FastCategory";
import "./Home.scss";
import JustForYou from "./JustForYou";
import LatestProduct from "./LatestProduct";
import { NotificationPop } from "./NotificationPop";
import PopularCategories from "./PopularCategories";

import img1 from "./image/LatestProduct/cloth1.png";
import img2 from "./image/LatestProduct/cloth2.png";
import img3 from "./image/LatestProduct/cloth3.png";
import img4 from "./image/LatestProduct/cloth4.png";
import img5 from "./image/LatestProduct/phone1.png";
import img6 from "./image/LatestProduct/phone2.png";
import img7 from "./image/LatestProduct/phone3.png";
import img8 from "./image/LatestProduct/shirt1.png";
import img9 from "./image/LatestProduct/shirt2.png";
import img10 from "./image/LatestProduct/shirt3.png";

import img11 from "./image/LatestProduct/shirt4.png";
import img12 from "./image/LatestProduct/shoe1.png";
import img13 from "./image/LatestProduct/shoe2.png";
import img14 from "./image/LatestProduct/shoe3.png";
import img15 from "./image/LatestProduct/shoe4.png";
import img16 from "./image/LatestProduct/shoe5.png";
import img18 from "./image/LatestProduct/smartphone.png";
import img19 from "./image/LatestProduct/watch1.png";
import img20 from "./image/LatestProduct/watch2.png";
import img21 from "./image/LatestProduct/watch3.png";
import img22 from "./image/LatestProduct/watch4.png";



function Home () {
    const latestproducts = [
        {
            name : "Meril Lip Balm (Strawberry) - 4.8gm",
                        image :[
                {
                    id : 1 ,
                    img : img1,
                },
                {
                    id : 2 ,
                    img : img5
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img10
        },
        
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img : img2
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/3b4f24b37def7be07192e9fb74bd2ada.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img9
        },
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img : img3
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/b6dadfee5f9d38260285b2f65006a2e4.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img8
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img4
                },
                {
                    id : 2 ,
                    img: "https://static-01.daraz.com.bd/p/064116f46e0f58eeb92f9cdc28409019.jpg_300x0q75.webp "
                }
            ],
            price : 125,
            reguler : 100,
            img: img7
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img5
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/ee1860934750a6ec6abb9ff0bc512380.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img6
            
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img6
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/57e024c30c13ad95757c95f3c6bf369f.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img5
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img7
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/af50366f75496128332123b76eb1306c.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img3
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img8
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/1d6edd87b1848a7f6fe917269b751b2e.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img2
        }
        
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img9
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/e1289a5ab9498b46aabfa3fc1f5817fd.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img1
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: img10
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/aa69437a726b8460cefd60e7b9dca6f5.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/7a8144ca3a7ef4f130abb62fdaee72be.png_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img11
        },
        {
            name : "Meril Lip Balm (Strawberry) - 4.8gm",
                        image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/5db3ee998178a8177c6c002dc6a0d2bf.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img12
        },
        
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/6ed41de0f7aabf47309bc8fecfedc0b4.jpg"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/3b4f24b37def7be07192e9fb74bd2ada.jpg_300x0q75.webp"
                }
            ],
            price : 1000,
            reguler : 1500,
            img: img13
        },
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/39f7424ef5c72851760eb09d81b99083.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/b6dadfee5f9d38260285b2f65006a2e4.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img14
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://bd-live-21.slatic.net/kf/Sfa0166639231427985b9f69f7a6845e4P.jpg"
                },
                {
                    id : 2 ,
                    img: "https://static-01.daraz.com.bd/p/064116f46e0f58eeb92f9cdc28409019.jpg_300x0q75.webp "
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img15
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/d9c923ff6c32c631f082bd478db063d2.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/ee1860934750a6ec6abb9ff0bc512380.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img16
            
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/1200862fdab259e261695433537ed500.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/57e024c30c13ad95757c95f3c6bf369f.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img18
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://bd-live-21.slatic.net/kf/Sd87fe719b9b64a68b6cda8953fe96419Q.jpg"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/af50366f75496128332123b76eb1306c.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img19
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/c7a4563ac63db823905fe759abf920b4.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/1d6edd87b1848a7f6fe917269b751b2e.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img20
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/e1289a5ab9498b46aabfa3fc1f5817fd.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: img21
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/aa69437a726b8460cefd60e7b9dca6f5.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: img22
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/7a8144ca3a7ef4f130abb62fdaee72be.png_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
        },
        {
            name : "Meril Lip Balm (Strawberry) - 4.8gm",
                        image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/5db3ee998178a8177c6c002dc6a0d2bf.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg"
        },
        
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/6ed41de0f7aabf47309bc8fecfedc0b4.jpg"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/3b4f24b37def7be07192e9fb74bd2ada.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/6ed41de0f7aabf47309bc8fecfedc0b4.jpg"
        },
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/39f7424ef5c72851760eb09d81b99083.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/b6dadfee5f9d38260285b2f65006a2e4.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/39f7424ef5c72851760eb09d81b99083.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://bd-live-21.slatic.net/kf/Sfa0166639231427985b9f69f7a6845e4P.jpg"
                },
                {
                    id : 2 ,
                    img: "https://static-01.daraz.com.bd/p/064116f46e0f58eeb92f9cdc28409019.jpg_300x0q75.webp "
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: "https://bd-live-21.slatic.net/kf/Sfa0166639231427985b9f69f7a6845e4P.jpg"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/d9c923ff6c32c631f082bd478db063d2.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/ee1860934750a6ec6abb9ff0bc512380.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/d9c923ff6c32c631f082bd478db063d2.jpg_200x200q75-product.jpg_.webp"
            
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/1200862fdab259e261695433537ed500.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/57e024c30c13ad95757c95f3c6bf369f.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/1200862fdab259e261695433537ed500.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://bd-live-21.slatic.net/kf/Sd87fe719b9b64a68b6cda8953fe96419Q.jpg"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/af50366f75496128332123b76eb1306c.jpg_300x0q75.webp"
                }
            ],
            mall : "mall & mart",
            price : 125,
            reguler : 100,
            img: "https://bd-live-21.slatic.net/kf/Sd87fe719b9b64a68b6cda8953fe96419Q.jpg"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/c7a4563ac63db823905fe759abf920b4.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/1d6edd87b1848a7f6fe917269b751b2e.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/c7a4563ac63db823905fe759abf920b4.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/e1289a5ab9498b46aabfa3fc1f5817fd.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/aa69437a726b8460cefd60e7b9dca6f5.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/7a8144ca3a7ef4f130abb62fdaee72be.png_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/e1289a5ab9498b46aabfa3fc1f5817fd.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/aa69437a726b8460cefd60e7b9dca6f5.jpg_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            image :[
                {
                    id : 1 ,
                    img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
                },
                {
                    id : 2 ,
                    img : "https://static-01.daraz.com.bd/p/7a8144ca3a7ef4f130abb62fdaee72be.png_300x0q75.webp"
                }
            ],
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
        }
    ]

    const data = [

        {
            loading : true ,
            name : "Body Care",
            img : "https://icms-image.slatic.net/images/ims-web/d0d0cffc-7936-4e93-b253-e5552081e75c.png"
        }
        ,
        {
            name : "House Caring",
            img : "https://icms-image.slatic.net/images/ims-web/ebea165c-3ea2-4520-b7f2-f97cbc46413a.png"
        }
        ,
        {
            name : "Free Delevari",
            img : "https://icms-image.slatic.net/images/ims-web/3e96d69f-8dc7-437b-9136-7fb3e9b7fef5.png"
        }
        ,
        {
            name : "Chair Trading",
            img : "https://icms-image.slatic.net/images/ims-web/5a0ab88f-d0eb-442e-b1ec-4e578b89714b.png"
        }
        ,
        {
            name : "1M Calebarite",
            img : "https://icms-image.slatic.net/images/ims-web/c846943e-f35a-4c11-bb0a-03cb7a48a5c1.png",
            
        },
        {
            name : "Fashon House",
            img : "https://icms-image.slatic.net/images/ims-web/ad15a9e8-1f4b-495d-845f-c0c74d04cf14.png"
        },
        {
            name : "Coin Sell & Buy",
            img : "https://icms-image.slatic.net/images/ims-web/8083b7e7-b4af-4057-bb2e-83c444a15ead.png"
        },
        {
            name : "Muster Card",
            img : "https://icms-image.slatic.net/images/ims-web/ee1d0c42-18d7-4386-a553-8affb6216b50.png"
        },
        {
            name : "Best Offer Now",
            img : "https://icms-image.slatic.net/images/ims-web/52d7215d-28e2-43d8-9990-fa036974a696.png"
        },
        {
            name : "Free Delevari",
            img : "https://icms-image.slatic.net/images/ims-web/89016ea3-c4c3-4839-9d5c-660c79befb1a.png"
        },


        
    ]

    const Populer = [

        
        {
            name : "Bussesness",

            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
        }
        ,
        {
            name : "T Shirt",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/28498202ae21a0c9fe06aa8bd982c2f2.jpg " 
        }
        ,
        {
            name : "Hair Accessories",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/1ba680a4f2fe16f5663165b0f26675b5.jpg"
        },
        {
            name : "Tramiier Glomari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/a4b53fc807367c7e7f7c0003714cc15b.jpg"
        },
        {
            name : "Backing Tooles & Accocess",
            img : "https://static-01.daraz.com.bd/p/2a004fec98afbce8651a5afe038e81af.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/d0342b3b0192e9c1f869e6edecc11042.png"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/b89ef2a85854bdd8c03e1accd224da3b.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/ff96378d6bd8b3865f3fcced26d2c354.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/1a691923d73717e5d16e6ba99817797b.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/8362592777816b89fb79d31ee1617b8a.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/a701e4c6bdd483056bf33c721f01fe15.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/eba53464dca8521ebf978cb931f6c824.jpg"
        },
        {
            name : "Free Delevari",
            image :[
                {
                    id : 1 ,
                    img : "https://static-01.daraz.com.bd/p/02e345a0d737bd062e12e0edc318a27b.jpg"
                }
            ],
            img : "https://static-01.daraz.com.bd/p/0f54bc421d5518f4fd8b9b997cfbc2ff.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/f47d682d558c9f09db761603f224955e.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/e2cd389fe6ddb610579278f19cd25040.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/625b56e8fc674a24b9c162de283fe0ec.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://icms-image.slatic.net/images/ims-web/89016ea3-c4c3-4839-9d5c-660c79befb1a.png"
        },

        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/2e89bb2abb4e8c7bd5704639f61a23a0.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/625b56e8fc674a24b9c162de283fe0ec.jpg"
        },
        
    ]
    // const HeaderImg = {
    //     img : "https://static-01.daraz.com.bd/p/ca2022cd3139521b67eee1fb3182c9e3.jpg_300x0q75.webp"
    // }
    // const category = [
    //     {
    //         name : "Woman Fashon"
    //     },
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }

    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    //     ,
    //     {
    //         name : "Woman Fashon"
    //     }
    // ]



    // slider button slide latest product Slider 
    const HomeProductSlidebtnPreLatest = useRef()

    const HomeProductbtnPreLatest = () =>{
        HomeProductSlidebtnPreLatest.current.scrollLeft -= 250  
    }
  
    
    const HomeProductbtnNextLatest = () =>{
        HomeProductSlidebtnPreLatest.current.scrollLeft += 250  
   }
  // slider button slide latest product Slider end
  
      // slider button slide latest product Slider 
      const HomeProductSlidebtnPreFresh = useRef()
      const HomeProductbtnPreFresh = () =>{
        HomeProductSlidebtnPreFresh.current.scrollLeft -= 250  
      }
      const HomeProductbtnNextFresh = () =>{
        HomeProductSlidebtnPreFresh.current.scrollLeft += 250  
     }
    // slider button slide latest product Slider end
     


      // slider button slide latest product Slider 
      const HomeCategorySlidebtnPreLatest = useRef()
      const HomeCategorybtnPreLatest = () =>{
       HomeCategorySlidebtnPreLatest.current.scrollLeft -= 250  
      
      }
      const HomeCategorybtnNextLatest = () =>{
        HomeCategorySlidebtnPreLatest.current.scrollLeft += 250  
     }

     //const [openheaderFast, setHeaderFast] = useState(false)
     //   const toggleBtn =   "ActiveNavaa" 
       // slider button slide latest product Slider end


       const [openPopUp , setPopUp] = useState(false)
       window.addEventListener("load" ,() =>{
       
 
        setPopUp(true)

        setTimeout(() => {
            setPopUp(false)
        }, 3000);
       })


  // eslint-disable-next-line no-unused-vars
  let  isDraging  = false , startScrollLeft, startX

  const dragStart = (e) => {

    const d = document.querySelector(".fastCategoryContant")
    d.classList.add("dragging");
   
    // isDragging = true;
     startX = e.pageX;
    startScrollLeft = d.scrollLeft;
    //d.scrollLeft += 300
     isDraging = true
 
}

const dragging = (e) => {
  const d = document.querySelector(".fastCategoryContant")
  if(!isDraging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  d.scrollLeft = startScrollLeft - (e.pageX - startX);
}


  const dragEnd = () =>{
    const d = document.querySelector(".fastCategoryContant")
    d.classList.remove("dragging");
    isDraging = false
    

  }


   

  return (
    <div className={`HomeSection`}>
         <MainMessage />

         {
            openPopUp && (
                <NotificationPop  />

            ) 
         }

  
         
        <div className="">
            <div className="container">

        {/* HomeHeaderConatiner  page Start ------ Md Azharul Creator-------Md-Azharul---- */}
            <div className={`HomeHeaderConatiner `}>
                <HomeHeader />
                {/* <div className="HomeHeaderConatinerBackground">
                    <div className="HomeHeaderConatinerBackgroundImage">

                        <div className="HomeLeftPart">
                            <div className="HomeLeftPartConatiner">
                                <div className="CategoryHomeLeft">

                                    <div className="CategoryContant">
                                        <div className="categoryTittle">
                                            <div className="CategoryFeexd">
                                                <span className='text-red-500'><TbLayoutDashboard /></span>
                                                <h3 className="">Category</h3>
                                            </div>

                                        </div>

                                        <div className="categoyConteant">
                                            <ul className="">

                                                {
                                                    category && category.map((el, index)=>{
                                                        return (
                                                            <li key={index} className="categoryItem"> <NavLink>{el.name.length > 12 ? el.name.slice(0, 12) + ".." : el.name} </NavLink></li>
                                                        )
                                                    })
                                                }
  
                                                
                                        
                                                
                                             
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="HomeRightSide">
                            <div className="HomeLeftPartConatiner">
                                <div className="CategoryHomeRight">
                                    <img src={HeaderImg.img} alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
               

            </div>
        {/*HomeHeaderConatiner page end ------ Md Azharul Creator-------Md-Azharul---- */}

{/* ---------------------------Md Azharul------------------------------------------------ */}
            {/* fast category page Start ------ Md Azharul Creator-------Md-Azharul---- */}
                <div  className="fastCategory">
                    <div onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}    className="fastCategoryContant">

                    {
                        data && data.map((el, index)=>{
                            return(
                                <div   key={index} className="categoryCard">
                                    <FastCategory
                                       name ={el.name}
                                       img ={el.img}                                  
                                    />
 
                                 </div>  
                            )
                        })
                    }
                    </div>

                </div> 
            {/* fast category page End-------Md Azharul Creator-------Md-Azharul---- */}

{/* ---------------------------Md Azharul------------------------------------------------ */}

            {/* Ads page Start-------Md Azharul Creator-------Md-Azharul----  */}
  
            {/* Ads product page End-------Md Azharul Creator-------Md-Azharul---- */}

{/* ---------------------------Md Azharul------------------------------------------------ */}

            {/* latest Products page Start-------Md Azharul Creator-------Md-Azharul----  */}
                <div className="latestProductContainer">                  
                <div className="latestProductTittle">
                            <h2 className="">Latest Product</h2>
                </div>

            {/* Laptob pc ---for Button slider------------createor ---md Azharul */ }
                <div  onClick={HomeProductbtnPreLatest} className="HomeProductSlidebtnPre">
                    <i className="" > <GrPrevious /></i>
                </div>
                <div onClick={HomeProductbtnNextLatest} className="HomeProductSlidebtnNext">
                    <i > <GrNext /></i>
                </div>
             {/* Laptob pc ---for Button slider------------createor ---md Azharul */ }

            {/* All Mobail ---for Button slider------------createor ---md Azharul */ }
                <div  onClick={HomeProductbtnPreLatest} className="HomeProductSlidebtnPreMobail">
                    <i className="" > <GrPrevious /></i>
                </div>
                <div onClick={HomeProductbtnNextLatest} className="HomeProductSlidebtnNextMobail">
                    <i > <GrNext /></i>
                </div>
             {/* All Mobail ---for Button slider------------createor ---md Azharul */ }

                    <div ref={HomeProductSlidebtnPreLatest} className="latestProductContant  ">



                        {
                            latestproducts && latestproducts.map((el, index)=>{
                                return (
                                    <div key={index} className="productCard">

                                        <LatestProduct
                                            id={el.id}
                                            name={el.name}
                                            image = {el.img}
                                            price={el.price}
                                            reguler={el.reguler}
                                            imageArray = {el.image} 
                                            loading = {el.loading}
                                            mall = {el.mall}
                                        />
        
                                </div>

                                )
                            })
                        }



                    </div>
                </div>
            {/* Latest product page End-------Md Azharul Creator-------Md-Azharul---- */}

{/* ---------------------------Md Azharul------------------------------------------------ */}

            {/* Ads page Start-------Md Azharul Creator-------Md-Azharul----  */}
      
            {/* Ads product page End-------Md Azharul Creator-------Md-Azharul---- */}


            {/* 2nd category page Start ------ Md Azharul Creator-------Md-Azharul---- */}
            <div className="fastCategory">
                
            {/* All Mobail ---for Button slider------------createor ---md Azharul */ }
                <div  onClick={HomeCategorybtnPreLatest} className="HomeTwoCategorySlidebtnPreMobail">
                    <i className="" > <GrPrevious /></i>
                </div>
                <div onClick={HomeCategorybtnNextLatest} className="HomeTwoCategorySlidebtnNextMobail">
                    <i > <GrNext /></i>
                </div>
        {/* All Mobail ---for Button slider------------createor ---md Azharul */ }
            <div className="latestProductTittle">
                    <h2 className="">Popular Categories</h2>
                </div>
                    <div ref={HomeCategorySlidebtnPreLatest} className="fastCategoryContant">

                    {
                        Populer && Populer.map((el, index)=>{
                            return(
                                <div key={index} className="categoryCard">
                                    <PopularCategories
                                       name ={el.name}
                                       img ={el.img}                                  
                                    />
 
                                 </div>  
                            )
                        })
                    }
                    </div>

                </div> 
            {/* 2nd category page End-------Md Azharul Creator-------Md-Azharul---- */}


{/* ---------------------------Md Azharul------------------------------------------------ */}

            {/* Ads page Start-------Md Azharul Creator-------Md-Azharul----  */}
         
            {/* Ads product page End-------Md Azharul Creator-------Md-Azharul---- */}



{/* ---------------------------Md Azharul------------------------------------------------ */}

           {/* Fresh Sale Products page Start-------Md Azharul Creator-------Md-Azharul----  */}
                        <div className="latestProductContainer">
                            <div className="latestProductTittle">
                                        <h2 className="">Frash Sale</h2>
                                    </div>

                                    
                                    {/* Laptob pc ---for Button slider------------createor ---md Azharul */ }
                                <div  onClick={HomeProductbtnPreFresh} className="HomeProductSlidebtnPre">
                                    <i className="" > <GrPrevious /></i>
                                </div>
                                <div onClick={HomeProductbtnNextFresh} className="HomeProductSlidebtnNext">
                                    <i > <GrNext /></i>
                                </div>
                            {/* Laptob pc ---for Button slider------------createor ---md Azharul */ }

                            {/* All Mobail ---for Button slider------------createor ---md Azharul */ }
                                <div  onClick={HomeProductbtnPreFresh} className="HomeProductSlidebtnPreMobail">
                                    <i className="" > <GrPrevious /></i>
                                </div>
                                <div onClick={HomeProductbtnNextFresh} className="HomeProductSlidebtnNextMobail">
                                    <i > <GrNext /></i>
                                </div>
                            {/* All Mobail ---for Button slider------------createor ---md Azharul */ }


                                <div ref={HomeProductSlidebtnPreFresh} className="latestProductContant">

                        {
                            latestproducts && latestproducts.map((el, index)=>{
                                return (
                                    <div key={index} className="productCard">

                                        <LatestProduct
                                            id={el.id}
                                            name={el.name}
                                            image = {el.img}
                                            price={el.price}
                                            reguler={el.reguler}
                                            imageArray = {el.image} 
                                        />
        
                                </div>

                                )
                            })
                        }



                    </div>
                </div>
            {/* freash Sale product page End-------Md Azharul Creator-------Md-Azharul---- */}


{/* ---------------------------Md Azharul------------------------------------------------ */}

{/* ---------------------------Md Azharul------------------------------------------------ */}

            {/* Ads page Start-------Md Azharul Creator-------Md-Azharul----  */}
            {/* <div className="adsOptions">
                <div className="adsContainer">
                    <img src={imagebannar1} alt="" />
                </div>

                <div className="adsContainer">
                    <img src={imagebannar1} alt="" />
                </div>

                <div className="adsContainer">
                    <img src={imagebannar1} alt="" />
                </div>
             </div> */}
            {/* Ads product page End-------Md Azharul Creator-------Md-Azharul---- */}


     {/* Just For You Sale Products page Start-------Md Azharul Creator-------Md-Azharul----  */}
           <div className="latestProductContainer">
                <div className="latestProductTittle">
                            <h2 className="">Just For You</h2>
                        </div>
                    <div className="justProductContant">



                        {
                            latestproducts && latestproducts.map((el, index)=>{
                                return (
                                    <div key={index} className="JustForproductCard">

                                        <JustForYou
                                            id={el.id}
                                            name={el.name}
                                            image = {el.img}
                                            price={el.price}
                                            reguler={el.reguler}
                                        />
        
                                </div>

                                )
                            })
                        }



                    </div>
                </div>
     {/* Just For You freash Sale product page End-------Md Azharul Creator-------Md-Azharul---- */}


           
            </div>
        </div>
    </div>
  )
}

export default Home