import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MapPinIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export const ContactsPageTwo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="bg-white">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
                <span className="-mt-0.5">DevUI</span>
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Contact from */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black  sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-2 text-base text-gray-600 ">
                Our friendly team would love to hear from you.
              </p>

              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-gray-900 ">
                      Full Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter You Full Name"
                        id="name"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-base font-medium text-gray-900 ">
                      Email address
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      placeholder="Enter Your Email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="Message" className="text-base font-medium text-gray-900 ">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        className=" flex  w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        placeholder="Leave us a message..."
                        id="Message"
                        rows={4}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="space-x-2 text-base leading-normal text-gray-600"
                      htmlFor="terms_and_condition"
                    >
                      <input type="checkbox" name="" id="terms_and_condition" />
                      <span>
                        You agree to our friendly&nbsp;
                        <span className="underline">privacy policy.</span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <button className="flex w-full items-center justify-center  rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold text-white hover:bg-indigo-500">
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden h-full w-full lg:block">
            <img
              className="mx-auto h-full w-full object-cover"
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/map-vertical.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* locations */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-3">
              <div className="space-y-4">
                <p className="w-full text-base font-semibold  text-purple-700">Our locations</p>
                <p className="w-full text-4xl font-semibold  text-gray-900">Out Offices</p>
                <p className="w-full text-xl  text-gray-600">Find us at these locations.</p>
              </div>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.title} className="flex w-2/3 flex-col space-y-2 lg:w-full">
                    <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                    <p className="w-full text-base  text-gray-600">{location.timings}</p>
                    <p className="text-base font-semibold  text-purple-700">{location.address}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {locations2.map((location) => (
                  <div key={location.title} className="flex w-2/3 flex-col space-y-2 lg:w-full">
                    <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                    <p className="w-full text-base  text-gray-600">{location.timings}</p>
                    <p className="text-base font-semibold  text-purple-700">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="space-y-4 py-12">
              <p className="text-base font-semibold text-purple-700">Contact us</p>
              <p className="text-4xl font-semibold text-gray-900">We’d love to hear from you</p>
              <p className="text-xl text-gray-600">Our friendly team is always here to chat.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-2  lg:grid-cols-4">
              {supports.map((support) => (
                <div
                  key={support.title}
                  className="flex flex-col justify-between rounded-md bg-gray-100 p-4"
                >
                  <div>
                    <div className="mb-8 inline-block rounded-lg bg-purple-600 p-3">
                      {support.icon}
                    </div>
                  </div>
                  <div className="space-y-1 ">
                    <p className="w-full text-xl font-semibold text-gray-900">{support.title}</p>
                    <p className="w-full text-base text-gray-600">{support.description}</p>
                    <p className="text-base font-semibold text-purple-700">{support.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <footer className="container mx-auto py-10 px-10 md:px-0">
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#4F46E5"
                className="h-10 w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  clipRule="evenodd"
                />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </div>
            <div className="mt-4 grow md:mt-0 md:ml-12">
              <p className="text-base font-semibold text-gray-500">
                © 2023 DevUI Component Library
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

ContactsPageTwo.displayName = 'ContactsPageTwo'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const locations = [
  {
    title: 'Bengaluru office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
  },
  {
    title: 'Karnataka office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
  },
]

const locations2 = [
  {
    title: 'Mumbai office',
    timings: 'Mon-Sat 9am to 5pm.',
    address:
      '501, 5th Floor, B Wing, Lotus Corporate Park, Goregaon East, Mumbai, Maharashtra 400063 IN',
  },
  {
    title: 'Delhi office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '5th Floor, DLF Cyber City, Phase 2, NH 8, Gurugram, Haryana 122002 IN',
  },
  {
    title: 'Chennai office',
    timings: 'Mon-Sat 9am to 5pm.',
    address:
      '9th Floor, Prestige Centre Court, Vijaya Forum Mall, 183, NSK Salai, Vadapalani, Chennai, Tamil Nadu 600026 IN',
  },
]

const supports = [
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white " />,
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    info: 'support@devui.io',
  },
  {
    icon: <ChatBubbleLeftRightIcon className="h-5 w-5 text-white " />,
    title: 'Chat to support',
    description: 'We’re here to help.',
    info: 'support@devui.io',
  },
  {
    icon: <MapPinIcon className="h-5 w-5 text-white " />,
    title: 'Visit us',
    description: 'Visit our office HQ.',
    info: 'Electronic City, Bengaluru, Karnataka',
  },
  {
    icon: <PhoneIcon className="h-5 w-5 text-white " />,
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm.',
    info: '+1 (555) 000-0000',
  },
]
