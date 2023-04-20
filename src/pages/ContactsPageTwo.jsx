/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import {
    ChatBubbleLeftRightIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    MapPinIcon,
    PhoneIcon
} from "@heroicons/react/24/outline";

const locations = [
        {
            title: "Bengaluru office",
            timings: "Mon-Sat 9am to 5pm.",
            address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"
        },
        {
            title: "Head office",
            timings: "Mon-Sat 9am to 5pm.",
            address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"
        },
        {
            title: "Karnataka office",
            timings: "Mon-Sat 9am to 5pm.",
            address: "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"
        }
    ],

    locations2 = [
        {
            title: "Mumbai office",
            timings: "Mon-Sat 9am to 5pm.",
            address:
  "501, 5th Floor, B Wing, Lotus Corporate Park, Goregaon East, Mumbai, Maharashtra 400063 IN"
        },
        {
            title: "Delhi office",
            timings: "Mon-Sat 9am to 5pm.",
            address: "5th Floor, DLF Cyber City, Phase 2, NH 8, Gurugram, Haryana 122002 IN"
        },
        {
            title: "Chennai office",
            timings: "Mon-Sat 9am to 5pm.",
            address:
  "9th Floor, Prestige Centre Court, Vijaya Forum Mall, 183, NSK Salai, Vadapalani, Chennai, Tamil Nadu 600026 IN"
        }
    ],

    supports = [
        {
            icon: <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white " />,
            title: "Chat to sales",
            description: "Speak to our friendly team.",
            info: "support@devui.io"
        },
        {
            icon: <ChatBubbleLeftRightIcon className="h-5 w-5 text-white " />,
            title: "Chat to support",
            description: "We’re here to help.",
            info: "support@devui.io"
        },
        {
            icon: <MapPinIcon className="h-5 w-5 text-white " />,
            title: "Visit us",
            description: "Visit our office HQ.",
            info: "Electronic City, Bengaluru, Karnataka"
        },
        {
            icon: <PhoneIcon className="h-5 w-5 text-white " />,
            title: "Call us",
            description: "Mon-Fri from 8am to 5pm.",
            info: "+1 (555) 000-0000"
        }
    ],

    ContactsPageTwo = () => (
        <div className="bg-white">

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
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                                                className=" flex  w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                                        <button type="button" className="flex w-full items-center justify-center  rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold text-white hover:bg-indigo-500">
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

        </div>
    );

ContactsPageTwo.displayName = "ContactsPageTwo";

export default ContactsPageTwo;
