import {
  PromotionSchema,
  TiketSchema,
  KategoriSchema,
  BrandHomeSchema,
  SpesialOfficerSchema,
  RiwayatComponetsShcema,
  CreaditCardShema,
  PaymentMethodCardShema,
} from '../types/components';

export const PromotionSchemaData: PromotionSchema[] = [
  {
    title: 'Halo! Luke Thomp',
    desk: 'Eat Gelato Like Theres No Tomorow !',
    image: '/asset/cinnamorrol.svg',
  },
  {
    title: 'aaaa',
    desk: 'Eat Gelato Like Theres No Tomorow !',
    image: '/asset/Chibi Gawr Gura.svg',
  },
];

export const TiketSchemaData: TiketSchema[] = [
  {
    title: 'Tiket',
    image: '/asset/Tiket.png',
    organizer: 'Motion Ime',
    price: 10000000,

    cart: 'Masukan Ke Keranjang',
  },
  {
    title: 'Tiket',
    image: '/asset/Tiket.png',
    organizer: 'Motion Ime',
    price: 10000000,
    cart: 'Masukan Ke Keranjang',
  },
  {
    title: 'Tiket',
    image: '/asset/Tiket.png',
    organizer: 'Motion Ime',
    price: 10000000,
    cart: 'Masukan Ke Keranjang',
  },
  {
    title: 'Tiket',
    image: '/asset/Tiket.png',
    organizer: 'Motion Ime',
    price: 10000000,
    cart: 'Masukan Ke Keranjang',
  },
];

export const KategoriSchemaData: KategoriSchema[] = [
  {
    title: 'Festival',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Konser',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Seminar',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Jepang',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Pameran',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Kompetisi',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Komunitas',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Kuliner',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Olahraga',
    params: '#',
    image: '/asset/Festival.png',
  },

  {
    title: 'Keagaman',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Teknologi',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Nobar',
    params: '#',
    image: '/asset/Festival.png',
  },
  {
    title: 'Lainnya',
    params: '/user/kategori',
    image: '/asset/Festival.png',
  },
];

export const BrandHomeData: BrandHomeSchema[] = [
  {
    brand: 'Creative Brand',
    image: '/asset/brand.jpeg',
    location: '7 km Away',
    promo: '23',
    rating: '4.3',
    secoundImage: '/asset/Events.jpeg',
  },
  {
    brand: 'Creative Brand',
    image: '/asset/brand.jpeg',
    location: '7 km Away',
    promo: '23',
    rating: '4.3',
    secoundImage: '/asset/Events.jpeg',
  },
];

export const SpesialOfficerData: SpesialOfficerSchema[] = [
  {
    title: 'Get Loka Loka',
    brands: 'Loka Loka',
    image: '/asset/banner.jpeg',
    rating: '4.4',
    secoundImage: '/asset/brand.jpeg',
  },
];

export const RiwayatComponentsData: RiwayatComponetsShcema[] = [
  // {
  //   title: 'Events',
  //   date: '2020',
  //   image: '/asset/Events.jpeg',
  //   items: '2',
  //   pricing: 100,
  //   label: 'Active',
  // },
];

export const CreditCardData: CreaditCardShema[] = [
  // {
  //   title: 'Visa',
  //   noCard: 1111222233334444,
  //   expEnd: '10/2',
  //   username: 'Mulia Andiki',
  // },
  // {
  //   title: 'Visa',
  //   noCard: 1111222233334444,
  //   expEnd: '10/2',
  //   username: 'Mulia Andiki',
  // },
];

export const PaymentMethodData: PaymentMethodCardShema[] = [
  {
    icon: '/asset/payment/shopeePay.png',
    title: 'Shopee Pay',
    description: 'Payment GateWay Shopee',
  },
  {
    icon: '/asset/payment/shopeePay.png',
    title: 'Shopee Pay',
    description: 'Payment GateWay Shopee',
  },
  {
    icon: '/asset/payment/shopeePay.png',
    title: 'Shopee Pay',
    description: 'Payment GateWay Shopee',
  },
];
