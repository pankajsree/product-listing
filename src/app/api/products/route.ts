import { NextResponse } from "next/server";

const data = {
  message: "success",
  products: [
    {
      id: 1,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      name: "Threptin Protein Biscuits",
      rating: 3,
      price: "575",
      category: 'furniture',
      img: '/static/images/p1.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 7,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 8,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 9,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 10,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 11,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 12,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 13,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 14,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 15,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 16,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 17,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 18,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 19,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 20,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 21,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 22,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 23,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 24,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 25,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 26,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 27,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 28,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 29,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 30,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 31,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 32,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 33,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 34,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 35,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 36,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 37,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 38,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 39,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 40,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 41,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 42,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 43,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 44,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 45,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 46,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 47,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 48,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 49,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 50,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 51,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 52,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 53,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 54,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 55,
      name: "S23 Ultra 5G",
      rating: 5,
      price: "92999",
      category: 'mobile',
      img: '/static/images/p4.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}