import { Dialog } from '@headlessui/react'
import { Bars3Icon, ClipboardDocumentIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export const BlogPostsPageTwo = () => {
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
      {/* main */}
      <div className="flex flex-col gap-y-6 lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <img
            className="aspect-square w-full object-cover"
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="ui ux "
          />
        </div>
        <div className="flex w-full flex-col justify-around gap-y-6 px-12 lg:w-1/2">
          <div className="space-y-6">
            <p className="text-5xl font-semibold text-gray-800">
              The Importance of UI/UX Research: Creating Designs that Users Love
            </p>
            <p className="text-xl text-gray-600">
              How UI/UX Research can Help you Make Informed Design Decisions
            </p>
          </div>
          {/* author */}
          <div className="flex ">
            <img
              className="mr-4 h-14 w-14 rounded-full"
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="David Rivera"
            />
            <div>
              <p className="text-lg font-semibold leading-7 text-gray-900">David Rivera</p>
              <p className="text-base leading-normal text-gray-600">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 space-y-6">
          <p className="text-3xl font-semibold leading-9 text-gray-900">Introduction</p>
          <p className="text-lg leading-7 text-gray-600">
            When it comes to designing user interfaces and user experiences, its essential to keep
            the user in mind. To create a design that meets user needs and expectations, you need to
            understand who your users are, what they want to accomplish, and how they will interact
            with your product. This is where UI/UX research comes in.
            <br />
            <br />
            UI/UX research involves gathering and analyzing data on user behavior, needs, and
            preferences. The insights gained from this research can help you make informed design
            decisions and create a product that users will love.
            <br />
            <br />
            In todays competitive market, where users have a plethora of options to choose from,
            designing a product that stands out and meets their expectations is more critical than
            ever. By conducting UI/UX research, you can create a design that is intuitive,
            user-friendly, and delightful to use.
          </p>
          <img
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="collaboration"
            className="rounded-lg"
          />

          <div className="space-y-4 border-l-2 border-indigo-600 pl-6">
            <p className="font-mediumitalic text-2xl italic leading-9 text-gray-900">
              “Good design is not just what looks good. It also needs to perform, convert, astonish,
              and fulfill its purpose”
            </p>
            <p className="text-base leading-normal text-gray-600">
              — David Rivera, Product Designer
            </p>
          </div>
          <p className="text-lg leading-7 text-gray-600">
            For example, user testing can help you gather feedback on your design from real users.
            This feedback can help you identify usability issues and areas where your design could
            be improved. Surveys can provide insights into user preferences and needs, which can
            help you create a design that meets their expectations. Analytics can help you track
            user behavior over time, which can help you identify trends and patterns in how users
            interact with your product. Prototyping can help you test different design ideas and
            gather feedback from users before you invest significant resources into development.
            <br />
            <br />
            Overall, UI/UX research is an essential part of the design process. By gathering data on
            user behavior and preferences, you can create a product that meets user needs and
            expectations, ultimately leading to increased user satisfaction, engagement, and
            loyalty.
          </p>
          <p className="text-2xl font-semibold leading-loose text-gray-900">Software and tools</p>
          <p className="text-lg leading-7 text-gray-600">
            To conduct UI/UX research, you need to use different software and tools. Here are some
            of the most popular ones:
            <br />
            <br />
            <b> User testing tools: </b>These tools help you test your UI/UX design with users,
            allowing you to gather valuable feedback. Some popular user testing tools include
            UserTesting, UsabilityHub, and Optimal Workshop.
            <br />
            <br />
            <b>Survey tools:</b> These tools help you collect data from users through online
            surveys. Some popular survey tools include Google Forms, SurveyMonkey, and Typeform.
            <br />
            <br />
            <b>Analytics tools:</b> Analytics tools help you track user behavior and gather data on
            how users interact with your UI/UX design. Some popular analytics tools include Google
            Analytics, Mixpanel, and Kissmetrics.
            <br />
            <br />
            <b>Prototyping tools:</b> Prototyping tools help you create interactive prototypes of
            your UI/UX design. Some popular prototyping tools include Sketch, Figma, and Adobe XD.
          </p>
          <p className="text-2xl font-semibold leading-loose text-gray-900">Other resources</p>
          <div className="space-y-4 text-lg leading-7 text-gray-600">
            <p>
              In addition to software and tools, there are other resources you can use to conduct
              UI/UX research effectively. Here are some of them:
            </p>
            <ul className="list-inside list-disc space-y-4">
              <li>
                <b>Industry reports:</b>
                Industry reports can provide you with valuable insights into the latest trends and
                best practices in UI/UX design. Some popular industry reports include the Nielsen
                Norman Groups annual UX report and the State of UX in 2021 report by UXPin.
              </li>
              <li>
                <b>Online communities:</b>
                Online communities such as Reddit, Designer News, and UX Design Community on
                Facebook can provide you with a wealth of information on UI/UX design. These
                communities can also help you connect with other designers and researchers in the
                field.
              </li>
              <li>
                <b>Conferences and meetups:</b>
                Attending conferences and meetups can help you learn from experts in the field and
                network with other designers and researchers. Some popular UI/UX design conferences
                include UX London, UXPA, and SmashingConf.
              </li>
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/34070/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="rounded-sm"
          />

          <div className="flex flex-col items-start justify-start space-y-4 rounded-2xl bg-gray-50 p-8">
            <p className="text-3xl font-semibold leading-9 text-gray-900">Conclusion</p>
            <p className="text-lg leading-7 text-gray-600">
              Conducting UI/UX research is essential for creating designs that meet user needs and
              expectations. By using software and tools such as user testing tools, survey tools,
              analytics tools, and prototyping tools, as well as other resources such as industry
              reports, online communities, and conferences and meetups, you can conduct effective
              UI/UX research and create designs that users love.
            </p>
          </div>
        </div>
        {/* author */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-200 py-4">
          <div className="flex ">
            <p className="text-base font-semibold text-gray-500">Share this post</p>
          </div>

          <div className="flex gap-x-4">
            <div className="flex space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow">
              <ClipboardDocumentIcon className="h-5 w-5" />
              <p className="text-sm font-semibold text-gray-700">Copy link</p>
            </div>
            <div className="flex space-x-2 rounded-lg border border-gray-300 bg-white px-2.5 py-2.5 shadow">
              <svg
                className="h-5 w-5 fill-gray-400"
                viewBox="-5 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -7399.000000)"
                    className="h-5 w-5 fill-gray-400"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex space-x-2 rounded-lg border border-gray-300 bg-white px-2.5 py-2.5 shadow">
              <svg
                className="h-5 w-5 fill-gray-400"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.002 512.002"
              >
                <path
                  d="M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193
	c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764
	c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201
	c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075
	c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568
	c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468
	c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638
	c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665
	c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736
	c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451
	c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906
	C507.7,94.204,503.76,93.294,500.398,94.784z"
                />
              </svg>
            </div>
            <div className="flex space-x-2 rounded-lg border border-gray-300 bg-white px-2.5 py-2.5 shadow">
              <svg
                className="h-5 w-5 fill-gray-400"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <path
                  d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* -- */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-y-4 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-4xl font-semibold text-gray-900">From the blog</p>
              <p className="text-lg text-gray-600">
                The latest industry news, interviews, technologies, and resources.
              </p>
              <button className="rounded-lg border border-purple-500 bg-purple-500 px-5 py-3 text-base font-semibold text-white shadow">
                View all posts
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {posts.map((post, i) => (
                <div
                  key={post.title}
                  className="grid justify-between gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-y-0"
                >
                  <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
                  <div className="space-y-2">
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
                  {/*  */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

BlogPostsPageTwo.displayName = 'BlogPostsPageTwo'

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
]

const colors = [
  'text-green-700 bg-green-50',
  'text-indigo-700 bg-indigo-50',
  'text-red-700 bg-red-50',
]