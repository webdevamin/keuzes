const categoriesWithItems = [
  {
    category: "smartphones",
    items: [
      { slug: "phones_all", name: "Alle" },
      { slug: "phones_android", name: "Android" },
      { slug: "phones_iphone", name: "Apple iPhone" },
    ],
  },
  {
    category: "laptops",
    items: [
      { slug: "laptops_all", name: "Alle" },
      { slug: "laptops_windows", name: "Windows" },
      { slug: "laptops_macbook", name: "Apple Macbook" },
    ],
  },
  {
    category: "desktops",
    items: [
      { slug: "desktops_all", name: "Alle" },
      { slug: "desktops_windows", name: "Windows" },
      { slug: "desktops_macs", name: "iMac & Mac Mini" },
    ],
  },
  {
    category: "tablets",
    items: [
      { slug: "tablets_all", name: "Alle" },
      { slug: "tablets_windows", name: "Android" },
      { slug: "tablets_macbook", name: "Apple iPad" },
    ],
  },
  {
    category: "televisie",
    items: [{ slug: "televisions_all", name: "Alle" }],
  },
];

const carouselItems = [
  {
    title: "Zenfold Madness",
    text: "Gekke solden voor Asus Zenfold producten op Amazon! Grijp nu je kans!",
    cta: {
      text: "Bekijk Zenfolds",
      link: "/items/12",
    },
    image: "/samsung-galaxy.webp",
  },
  {
    title: "Coolblue Black Friday",
    text: "Coolblue acties voor diverse artikelen op Black Friday!",
    cta: {
      text: "Bekijk acties",
      link: "/items/2",
    },
    image: "/coolblue-b-friday.jpg",
  },
  {
    title: "Amazon Cyber Monday",
    text: "Amazon Cyber Monday! Gekke solden voor elektronica!",
    cta: {
      text: "Bekijk solden",
      link: "/items/8",
    },
    image: "/amazon-c-monday.jpg",
  },
];

export { categoriesWithItems, carouselItems };
