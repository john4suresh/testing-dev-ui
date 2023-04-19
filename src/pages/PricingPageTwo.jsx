import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  CheckIcon,
  XMarkIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export const PricingPageTwo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="bg-white">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline ">
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
                <span className="dark sr-only">Your Company</span>
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
                <span className="sr-only ">Close menu</span>
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-6 py-10 text-center  lg:py-24">
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-base font-semibold leading-normal text-purple-700">Pricing</p>
            <p className="text-5xl font-semibold leading-10 text-gray-900">
              Simple, transparent pricing
            </p>
          </div>
          <p className="text-xl leading-loose text-gray-600">
            We believe Untitled should be accessible to all companies, no matter the size.
          </p>
          <div className="flex cursor-pointer space-x-2 rounded-lg border border-gray-100 bg-gray-50 p-1.5">
            <div className="rounded-md bg-white px-3.5 py-2.5 shadow">
              <p className="text-base font-semibold leading-normal text-gray-700">
                Monthly billing
              </p>
            </div>
            <div className="rounded-md px-3.5 py-2.5">
              <p className="text-base font-semibold leading-normal text-gray-500">Annual billing</p>
            </div>
          </div>
        </div>
        {/* Plans */}
        <div className=" px-8 pb-8">
          <div className="grid space-y-8 lg:grid-cols-3 lg:space-y-0 lg:space-x-8">
            {plans.map((plan) => (
              <div key={plan.name} className=" rounded-2xl border border-gray-200 bg-white shadow">
                <div className="flex w-full flex-col items-center justify-start space-y-8 border-b border-gray-200 px-8 pt-10">
                  <div className="flex w-full space-x-4">
                    <p className="flex-1 text-lg font-semibold leading-7 text-gray-600">
                      {plan.name}
                    </p>
                    {plan.isPopular ? (
                      <div className="flex items-center justify-start rounded-full bg-purple-50 px-3 py-1">
                        <p className="text-center text-sm font-medium leading-tight text-purple-700">
                          Popular
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <div className=" flex w-full space-x-1">
                    <p className="text-6xl font-semibold leading-10 text-gray-900">{plan.price}</p>
                    <p className="text-base font-medium leading-normal text-gray-600">per month</p>
                  </div>

                  <p className="w-full text-base leading-normal text-gray-600">{plan.tagline}</p>
                  <div className="flex w-full flex-col pb-8">
                    <div className="flex w-full flex-col items-start justify-start space-y-3">
                      <div className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-purple-500 bg-purple-500 px-5 py-3 shadow">
                        <p className="text-base font-semibold leading-normal text-white">
                          Get started
                        </p>
                      </div>
                      <div className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-3 shadow">
                        <p className="text-base font-semibold leading-normal text-gray-700">
                          Chat to sales
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pt-8 pb-10">
                  <div className="mb-4 inline-flex flex-col items-start justify-start space-y-1">
                    <p className="w-full text-base font-semibold leading-normal text-gray-900">
                      FEATURES
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Everything in our <b>{plan.feature}</b> plan plus....
                    </p>
                  </div>
                  <div className="flex w-full flex-col space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="inline-flex w-full space-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200">
                          <CheckIcon className="h-4 w-4 stroke-2 text-green-700" />
                        </div>
                        <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* faq */}
      <div className="space-y-16 bg-gray-50 py-24">
        <div className="mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 md:w-3/4">
            {/* faq title */}
            <div className="space-y-4 justify-self-center">
              <p className="text-center text-4xl font-semibold leading-10 text-gray-900">
                Frequently asked questions
              </p>
              <p className="text-center text-xl leading-loose text-gray-600">
                Everything you need to know about the product and billing.
              </p>
            </div>
            {/*  */}
            <div className="divide-y divide-gray-300">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="flex justify-between space-x-6 py-6">
                  <div className="inline-flex flex-col items-start justify-start space-y-2">
                    <p className="text-lg font-medium leading-7 text-gray-900">{faq.question}</p>
                    {index === 0 ? (
                      <p className="text-base leading-normal text-gray-600">{faq.answer}</p>
                    ) : null}
                  </div>
                  <div>
                    {index === 0 ? (
                      <MinusCircleIcon className="h-6 w-6" />
                    ) : (
                      <PlusCircleIcon className="h-6 w-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* --- */}
          </div>
        </div>
      </div>
      {/* features */}
      <div className="space-y-16 border-b border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="px-8">
            <div className="flex flex-col items-center justify-between rounded-2xl bg-gray-50 p-8 md:flex-row lg:space-x-8">
              <div className="space-y-2">
                <p className="text-xl font-semibold leading-loose text-gray-900">
                  Still have questions?
                </p>
                <p className="text-lg leading-7 text-gray-600">
                  Can’t find the answer you’re looking for? Please chat to our friendly team.
                </p>
              </div>
              <button className="mt-4 rounded-lg border border-purple-500 bg-purple-500 py-3 px-5 shadow lg:mt-0 lg:space-x-2 ">
                <span className="text-base font-semibold leading-normal text-white">
                  Get in touch
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
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
            <p className="text-base font-semibold text-gray-500">© 2023 DevUI Component Library</p>
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
  )
}

PricingPageTwo.displayName = 'PricingPageTwo'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const plans = [
  {
    name: 'Basic plan',
    price: '$10',
    features: [
      'Access to all basic features ',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
    isPopular: true,
    feature: 'Free',
    tagline: 'Basic features for up to 10 users.',
  },
  {
    name: 'Business plan',
    price: '$20',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
    isPopular: false,
    feature: 'Basic',
    tagline: 'Growing teams up to 20 users.',
  },
  {
    name: 'Enterprise plan',
    price: '$40',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized+priority service',
    ],
    isPopular: false,
    feature: 'Business',
    tagline: 'Advanced features + unlimited users.',
  },
]

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
  },

  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'You can change the email address associated with your account by going to account from a laptop or desktop.',
  },
]
