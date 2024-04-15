export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categories: number[] | undefined;
  currentInventory?: number;
  brand?: string;
  rating: number;
}

export interface ICategories {
  id: number;
  name: string;
  image?: string;
}

export interface ICustomer {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  location: string;
  image?: string;
}

export const categories: ICategories[] = [
  {
    id: 1,
    name: "Beds",
    image: "/products/beds/001.jpeg",
  },
  {
    id: 2,
    name: "Chairs",
    image: "/products/chairs/001.jpeg",
  },
  {
    id: 3,
    name: "Couch",
    image: "/products/couch/001.jpeg",
  },
  {
    id: 4,
    name: "Tables",
    image: "/products/tables/001.jpeg",
  },
  {
    id: 5,
    name: "Wardrobes",
    image: "/products/wardrobe/001.jpeg",
  },
];

export const products: IProduct[] = [
  {
    id: 1,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/001.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 47,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 2,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/002.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 34,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 3,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/003.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 87,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 4,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/004.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 95,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 5,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/005.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 102,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 6,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/006.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 43,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 7,
    name: "King Bed",
    categories: [1],
    price: 500000,
    image: "/products/beds/007.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 58,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 8,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/001.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 108,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 9,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/002.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 29,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 10,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/003.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 85,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 11,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/004.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 123,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 12,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/005.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 34,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 13,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/006.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 86,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 14,
    name: "Arms Chair",
    categories: [2],
    price: 100000,
    image: "/products/chairs/007.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 100,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 15,
    name: "Soft Couch",
    categories: [3],
    price: 400000,
    image: "/products/couch/001.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 27,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 16,
    name: "Soft Couch",
    categories: [3],
    price: 400000,
    image: "/products/couch/002.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 99,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 17,
    name: "Soft Couch",
    categories: [3],
    price: 400000,
    image: "/products/couch/003.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 69,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 18,
    name: "Soft Couch",
    categories: [3],
    price: 400000,
    image: "/products/couch/004.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 110,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 19,
    name: "Soft Couch",
    categories: [3],
    price: 400000,
    image: "/products/couch/005.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 35,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 20,
    name: "Soft Couch",
    categories: [3],
    price: 400000,
    image: "/products/couch/006.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 142,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 21,
    name: "Center Table",
    categories: [4],
    price: 150000,
    image: "/products/tables/001.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 22,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 22,
    name: "Center Table",
    categories: [4],
    price: 150000,
    image: "/products/tables/002.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 78,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 23,
    name: "Center Table",
    categories: [4],
    price: 150000,
    image: "/products/tables/003.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 59,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 24,
    name: "Center Table",
    categories: [4],
    price: 150000,
    image: "/products/tables/004.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 121,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 25,
    name: "Center Table",
    categories: [4],
    price: 150000,
    image: "/products/tables/005.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 93,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 26,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/001.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 30,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 27,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/002.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 88,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 28,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/003.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 17,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 29,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/004.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 13,
    rating: 5,
    brand: "Okoh",
  },
  {
    id: 30,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/005.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 54,
    rating: 4,
    brand: "Okoh",
  },
  {
    id: 31,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/006.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 10,
    rating: 3,
    brand: "Okoh",
  },
  {
    id: 32,
    name: "Modern Wardrobe",
    categories: [5],
    price: 600000,
    image: "/products/wardrobe/007.jpeg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat optio soluta repudiandae, deserunt eos recusandae repellendus omnis nostrum in iure expedita nihil minus! Mollitia ullam voluptates adipisci id quidem!",
    currentInventory: 27,
    rating: 4,
    brand: "Okoh",
  },
];

export const customers: ICustomer[] = [
  {
    id: "8557f070-eb86-3e37-a8ab-0aa6b73a9fa2",
    name: "Ifeoma Akunna Agnes",
    phone: "+2348084433199",
    email: "jadeniyan@hotmail.com",
    location: "60 Oyinkansola Street 80199 DanjumaVille",
    password: 'D"<8@J89!C(*~yU#3.c`',
  },
  {
    id: "9a4b2012-9743-392d-81f6-d98a96e30b68",
    name: "Ireti Funmilayo Afunku",
    phone: "08084296398",
    email: "toluwani.latifat@gmail.com",
    location: "51 Abiodun Street 18 377 BuchiVille",
    password: "y7)8{By",
  },
  {
    id: "8b074631-cdf8-3d2c-8f85-c54ea1917ede",
    name: "Remilekun Ebiowei Ebubechukwu",
    phone: "+2347032509628",
    email: "cherechi62@agboola.org",
    location: "56 Christian Street 42379 IfeomaVille",
    password: "CzaMRUY9q'e:un<",
  },
  {
    id: "eb9ea35f-f93a-380b-b500-cf8a894bbf76",
    name: "Fatima Okonkwo",
    phone: "+2348153894878",
    email: "augustina.gbogboade@hotmail.com",
    location: "62 Taiwo Street 02 949 ToluwaniVille",
    password: "&Teo9cJ",
  },
  {
    id: "84a29055-8d35-3d8d-86c5-f0664c2ab56e",
    name: "Kayode Kayode",
    phone: "0814 497 4322",
    email: "obioma81@onyinyechukwu.co",
    location: "96 Ayomide Street 37411 SumayyahVille",
    password: "!\\&CHKt}+I",
  },
  {
    id: "294d57b9-2820-3f3a-9239-cce7973aee5d",
    name: "Kayode Oyebola",
    phone: "08179875329",
    email: "israel.isioma@yahoo.com",
    location: "65 Mukaram Street 22982 AminuVille",
    password: "o`DTaL",
  },
  {
    id: "c9ac0d66-28fe-3f6a-9b10-c9f922262a90",
    name: "Adedayo Yakubu Olaoluwa",
    phone: "0810 943 0388",
    email: "lkayode@gmail.com",
    location: "16 Abodunrin Street 98 732 YusufVille",
    password: "(V6~}&LF+@2gntAdFvEC",
  },
  {
    id: "7af6956a-48c4-3366-a92e-64212d30ea2d",
    name: "Yusuf Sanusi",
    phone: "+2349090485446",
    email: "zagboola@hotmail.com",
    location: "46 Isaac Street 00659 TomilobaVille",
    password: "\\JEc9HpfCkZXSY",
  },
  {
    id: "d9852bf8-f98a-36c4-92ff-adbfa02f43de",
    name: "Kubra Ogunwande",
    phone: "0811 921 8852",
    email: "oluwaseyi.yusuf@christian.org",
    location: "58 Isaac Street 34 520 RasheedahVille",
    password: "1)+$R1g9p(AIh9aA+(",
  },
  {
    id: "42a0a830-29e9-3ff2-8bbe-fb0cc9d9910a",
    name: "Kubura Balogun",
    phone: "+2349026493891",
    email: "cmustapha@omobolaji.ng",
    location: "22 Muinat Street 58949 AyebatariVille",
    password: "m|Wo!5<6(sj`s0sc:<\\x",
  },
  {
    id: "755539ae-b300-3982-a0fb-07c586356fa4",
    name: "Titi Efe Mobolaji",
    phone: "+234 905 291 0947",
    email: "olufunmi35@chibuike.ng",
    location: "44 Yaqub Street 18451 AugustinaVille",
    password: "3%jtlc\\C##9G<Mbix!J",
  },
  {
    id: "43b0a21b-4b0e-30c9-8026-49bc7d5853f8",
    name: "Ayebatari Fatima Aminat",
    phone: "+234 908 621 5281",
    email: "kogunbanwo@chidinma.biz",
    location: "30 Ngozi Street 97067 AdaugoVille",
    password: "W{P,%rphj}6R@Jh7",
  },
  {
    id: "022a390c-8796-3037-9a40-48c279a9da46",
    name: "Chisom Olaide Omolara",
    phone: "07043296261",
    email: "chimamanda01@saheed.org",
    location: "68 Agboola Street 88574 ObiomaVille",
    password: '"hT_Pf{2)<9+3(4;\\5n',
  },
  {
    id: "d7a86abf-3fbd-3448-9f13-0df6bad9c532",
    name: "Habiba Yaqub",
    phone: "+234 903 741 1684",
    email: "ogunbanwo.titi@gmail.com",
    location: "87 Justina Street 47 821 YusufVille",
    password: "r976,x",
  },
  {
    id: "cd571362-ce65-318c-b46d-f9d894d5553c",
    name: "Omolara Aminu Oladeji",
    phone: "08097457269",
    email: "yajoseadeogun@yahoo.com",
    location: "86 Egbochukwu Street 56683 EbioweiVille",
    password: "uD;VEK+NnUd~%8T`;@sN",
  },
];
