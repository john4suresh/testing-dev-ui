import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export function BlogsTwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div className="flex flex-col items-center justify-center space-y-8 py-20">
          <p className="text-center text-base font-semibold leading-normal text-purple-700">
            Our blog
          </p>
          <p className="text-center text-5xl font-semibold leading-10 text-gray-900">
            Resources and insights
          </p>
          <p className="text-center text-xl leading-loose text-gray-600">
            The latest industry news, interviews, technologies, and resources.
          </p>
          <div className="ace-x-2 flex w-80 items-center space-x-2 overflow-hidden rounded-lg border border-gray-300  bg-white px-3.5 shadow">
            <MagnifyingGlassIcon className="h-5 w-5 rounded-lg" />
            <input
              type="text"
              className="flex-1 bg-white  py-3 text-base leading-normal text-gray-500 outline-none focus:outline-none focus:ring-0 "
              placeholder="Search"
            />
          </div>
        </div>
        {/* -- */}
        <div className="w-full space-y-4">
          <img
            className="aspect-video rounded-lg"
            src="https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <p className="text-sm font-semibold leading-tight text-purple-700">
            Olivia Rhye • 20 Jan 2022
          </p>
          <p className="text-3xl font-semibold leading-9 text-gray-900">UX review presentations</p>
          <p className="text-base leading-normal text-gray-600">
            How do you create compelling presentations that wow your colleagues and impress your
            managers?
          </p>
          <div className="flex space-x-4">
            <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-center text-sm font-medium leading-tight text-purple-700">
              Design
            </span>
            <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-center text-sm font-medium leading-tight text-indigo-700">
              Research
            </span>
            <span className="rounded-full bg-pink-50 px-2.5 py-0.5 text-center text-sm font-medium leading-tight text-pink-700">
              Presentation
            </span>
          </div>
        </div>

        {/* -- */}
        {/* filters */}
        <div className="mt-4 grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <div key={post.title} className="flex flex-col justify-between space-y-2">
              <div className="space-y-2">
                <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
                <p className="w-full text-sm font-semibold leading-tight text-purple-700">
                  {post.author} • {post.date}
                </p>
                <div>
                  <p className="flex-1 text-2xl font-semibold text-gray-900">{post.title}</p>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">{post.description}</p>
              </div>
              <div className="flex  space-x-3 ">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-center text-sm font-medium leading-tight ${
                    colors[i % 3]
                  }`}
                >
                  {post.category}
                </span>
              </div>
              {/*  */}
            </div>
          ))}
        </div>
        <hr className="my-6" />
        {/* pagination */}
        <div className="flex w-full justify-center">
          <div className="mx-auto flex">
            <a
              href="#"
              className="mx-1 flex cursor-not-allowed items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-400"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </a>
            <div className="hidden md:flex ">
              {['1', '2', '3', '...', '9', '10'].map((page) => (
                <a
                  key={page}
                  href="#"
                  className="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  {page}
                </a>
              ))}
            </div>
            <div className="mx-10 flex flex-1 items-center text-sm leading-tight text-gray-700 md:hidden">
              Page 1 of 10
            </div>

            <a
              href="#"
              className="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="mt-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6  lg:px-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <p className="text-4xl font-semibold leading-10 text-gray-900">Latest writings</p>
              <p className="text-xl leading-loose text-gray-600">
                The latest news, technologies, and resources from our team.
              </p>
            </div>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
                View all posts
              </button>
            </div>
          </div>
          <div className="grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter((e, i) => i < 3)
              .map((post, i) => (
                <div key={post.title} className="flex flex-col justify-between space-y-2">
                  <div className="space-y-2">
                    <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
                    <p className="w-full text-sm font-semibold leading-tight text-purple-700">
                      {post.author} • {post.date}
                    </p>
                    <div>
                      <p className="flex-1 text-2xl font-semibold text-gray-900">{post.title}</p>
                    </div>
                    <p className="w-full text-base leading-normal text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex  space-x-3 ">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-center text-sm font-medium leading-tight ${
                        colors[i % 3]
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  {/*  */}
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>
  )
}

BlogsTwo.displayName = 'BlogsTwo'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const posts = [
  {
    category: 'Design',
    title: '10 Tips for Crafting the Perfect UX Portfolio',
    description: 'Learn how to showcase your design skills and stand out in a crowded job market.',
    author: 'Emily Lee',
    date: '3 April 2023',
    avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
    poster:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
  },
  {
    category: 'Technology',
    title: 'The Future of Mobile App Development',
    description:
      'Discover the latest trends and techniques that will shape the future of mobile app development.',
    author: 'John Smith',
    date: '1 April 2023',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    poster:
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    category: 'Business',
    title: 'How to Launch a Successful Startup',
    description:
      'Learn the essential steps to launch a successful startup and make your dreams a reality.',
    author: 'Sarah Brown',
    date: '28 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    poster:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Health',
    title: 'The Benefits of Mindfulness Meditation',
    description:
      'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
    author: 'David Kim',
    date: '25 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    poster:
      'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Education',
    title: 'Why Learning a Second Language is Important',
    description:
      'Explore the benefits of learning a second language and how it can improve your cognitive abilities.',
    author: 'Maria Rodriguez',
    date: '22 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    poster:
      'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Travel',
    title: 'The Best Places to Visit in Europe',
    description: 'Discover the top destinations in Europe and plan your dream vacation.',
    author: 'Alex Johnson',
    date: '19 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
    poster:
      'https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Food',
    title: 'How to Make the Perfect Cup of Coffee',
    description:
      'Learn the secrets to making the perfect cup of coffee and impress your friends and family.',
    author: 'Thomas Lee',
    date: '16 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    poster:
      'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
  },
  {
    category: 'Fashion',
    title: 'The Latest Fashion Trends for Spring 2023',
    description:
      'Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.',
    author: 'Jessica Kim',
    date: '13 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    poster:
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Sports',
    title: 'The Benefits of Yoga for Athletes',
    description:
      'Learn how practicing yoga can improve your athletic performance and prevent injuries.',
    author: 'Michael Johnson',
    date: '10 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    poster:
      'https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
]

const colors = [
  'text-green-700 bg-green-50',
  'text-indigo-700 bg-indigo-50',
  'text-red-700 bg-red-50',
]
