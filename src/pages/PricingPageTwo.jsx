import {
  CheckIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import React from 'react'

export const PricingPageTwo = () => {

  return (
    <div className="bg-white">
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
    </div>
  )
}

PricingPageTwo.displayName = 'PricingPageTwo'

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
