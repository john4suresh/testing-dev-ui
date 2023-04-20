import {
  ArrowRightIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  PresentationChartLineIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

export function PricingPageOne() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="inline-flex flex-col items-start justify-start space-y-6 py-10  lg:py-24">
          <div className="flex flex-col items-start justify-start space-y-3">
            <p className="text-base font-semibold leading-normal text-purple-700">Pricing</p>
            <p className="text-5xl font-semibold leading-10 text-gray-900">
              Simple, transparent pricing
            </p>
          </div>
          <p className="text-xl leading-loose text-gray-600">
            We believe Untitled should be accessible to all companies, no matter the size.
          </p>
        </div>
        {/* Plans */}
        <div className=" px-8 pb-8">
          <div className="grid space-y-8 lg:grid-cols-3 lg:space-y-0 lg:space-x-8">
            {plans.map((plan) => (
              <div key={plan.name} className=" rounded-2xl border border-gray-200 bg-white shadow">
                <div className="flex w-full flex-col items-center justify-start space-y-4 px-8 pt-10">
                  <p className="text-center text-5xl font-semibold leading-10 text-gray-900">
                    {plan.price}
                  </p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-center text-xl font-semibold leading-loose text-gray-900">
                      {plan.name}
                    </p>
                    <p className="w-full text-center text-base leading-normal text-gray-600">
                      Billed annually.
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pt-8 pb-10">
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
                <div className="flex w-full flex-col px-8 pb-8">
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
            ))}
          </div>
        </div>
      </div>
      {/* features */}
      <div className="space-y-16 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="px-8">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-base font-semibold leading-normal text-purple-700">Features</p>
                <p className="text-4xl font-semibold leading-10 text-gray-900">
                  Beautiful analytics to grow smarter
                </p>
              </div>
              <p className="text-xl text-gray-600">
                Powerful, self-serve product and growth analytics to help you convert, engage, and
                retain more users. Trusted by over 4,000 startups.
              </p>
            </div>
          </div>
          {/* features */}
          {features.map((item, index) => (
            <div key={`feature-group-${index}`} className="grid px-8 md:grid-cols-3 md:space-x-8">
              {item.map((feature) => (
                <div key={feature.title} className="mb-8 space-y-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-8 border-purple-50 bg-purple-100 p-3">
                    {feature.image}
                  </div>
                  <div className="flex w-full flex-col space-y-2">
                    <p className="w-full text-xl font-semibold text-gray-900">{feature.title}</p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      {feature.description}
                    </p>
                  </div>

                  <a href={feature.href} className="flex items-center space-x-2">
                    <p className="text-base font-semibold leading-normal text-purple-700">
                      Learn more
                    </p>
                    <ArrowRightIcon className="h-4 w-4 rounded-lg stroke-2 text-purple-700" />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* faq */}
      <div className="space-y-16 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="px-8">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-4xl font-semibold leading-10 text-gray-900">FAQS</p>
              </div>
              <p className="text-xl text-gray-600">
                Everything you need to know about the product and billing. Can’t find the answer
                you’re looking for? Please chat to our friendly team.
              </p>
            </div>
          </div>
          {/* faq */}
          {faqs.map((item, index) => (
            <div key={`faq-group-${index}`} className="grid px-8 md:grid-cols-3 md:space-x-8">
              {item.map((faq) => (
                <div key={faq.question} className="my-8 space-y-5">
                  <div className="flex w-full flex-col space-y-2">
                    <p className="w-full text-lg font-semibold text-gray-900">{faq.question}</p>
                    <p className="w-full text-base leading-normal text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
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

const features = [
  [
    {
      title: 'Share team inboxes',
      description:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      image: (
        <ChatBubbleLeftRightIcon className="h-full flex-1 rounded-lg stroke-2 text-indigo-600" />
      ),
      href: '#',
    },
    {
      title: 'Deliver instant answers',
      description:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      image: <BoltIcon className="h-full flex-1 rounded-lg stroke-2 text-indigo-600" />,
      href: '#',
    },
    {
      title: 'Manage your team with reports',
      description:
        'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      image: (
        <PresentationChartLineIcon className="h-full flex-1 rounded-lg stroke-2 text-indigo-600" />
      ),
      href: '#',
    },
    //
  ],
  [
    {
      title: 'Connect with customers',
      description:
        'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
      image: <FaceSmileIcon className="h-full flex-1 rounded-lg stroke-2 text-indigo-600" />,
      href: '#',
    },
    {
      title: 'Connect the tools you already use',
      description:
        'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
      image: <LinkIcon className="h-full flex-1 rounded-lg stroke-2 text-indigo-600" />,
      href: '#',
    },
    {
      title: 'Our people make the difference',
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
      image: <HeartIcon className="h-full flex-1 rounded-lg stroke-2 text-indigo-600" />,
      href: '#',
    },
  ],
]

const plans = [
  {
    name: 'Basic plan',
    price: '$10/mth',
    features: [
      'Access to all basic features ',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Business plan',
    price: '$20/mth',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
  },
  {
    name: 'Enterprise plan',
    price: '$40/mth',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized+priority service',
    ],
  },
]

const faqs = [
  [
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
  ],
  [
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
  ],
]

PricingPageOne.displayName = 'PricingPageOne'
