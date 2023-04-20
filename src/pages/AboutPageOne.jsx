import { MapPinIcon } from '@heroicons/react/24/outline';

export const AboutPageOne = () => {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div className="flex flex-col items-center justify-center space-y-8 pt-20 pb-10">
          <p className="text-center text-base font-semibold leading-normal text-purple-700">
            About the company
          </p>
          <p className="text-center text-5xl font-semibold leading-10 text-gray-900">
            Made with love, right here in India
          </p>
          <p className="text-center text-xl leading-loose text-gray-600">
            Come visit our friendly team at one of our offices.
          </p>
        </div>
        {/* maps */}
        <div className="w-full space-y-4">
          <img
            className="  "
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col items-center justify-around gap-y-6 text-center md:flex-row">
          {locations.map((location) => (
            <div
              key={location.title}
              className="flex flex-col  items-center justify-center space-y-2 md:w-1/4 lg:w-1/5"
            >
              <MapPinIcon className="h-6 w-6 text-purple-700" />
              <p className="w-full text-center text-xl font-semibold  text-gray-900">
                {location.title}
              </p>
              <p className="w-full text-center text-base  text-gray-600">{location.timings}</p>
              <p className="text-center text-base font-semibold  text-purple-700">
                {location.address}
              </p>
            </div>
          ))}
        </div>
        {/* greetings */}
        <div className="my-24 flex items-center justify-center text-center">
          <div className="space-y-4 md:w-3/4">
            <p className="text-center text-base font-semibold text-purple-700">Join us!</p>
            <p className="text-center text-4xl font-semibold text-gray-900">Meet our team</p>
            <p className="text-center  text-xl text-gray-600">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        {/* dev */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-16 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="space-y-2" key={user.name}>
              <img src={user.image} alt={user.name} className="w-full" />
              <p className="w-full text-xl font-semibold  text-gray-900">{user.name}</p>
              <p className="w-full text-lg  text-purple-700">{user.position}</p>
              <div className="flex gap-x-4">
                <div>
                  <svg
                    className="h-4 w-4 fill-gray-400"
                    viewBox="-5 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-385.000000, -7399.000000)"
                        className="h-4 w-4 fill-gray-400"
                      >
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <svg
                    className="h-4 w-4 fill-gray-400"
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
                <div>
                  <svg
                    className="h-4 w-4 fill-gray-400"
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
          ))}
        </div>
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-base font-semibold  text-purple-700">Join our team</p>
            <p className="text-4xl font-semibold  text-gray-900">We’re just getting started</p>
            <p className="text-xl  text-gray-600">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <button className="rounded-lg border border-purple-500 bg-purple-500 px-5 py-3 text-base font-semibold text-white  shadow">
              We’re hiring!
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

AboutPageOne.displayName = 'AboutPageOne'

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

const users = [
  {
    name: 'Gabrielle Fernandez',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    position: 'Marketing Lead',
  },
  {
    name: 'Victória Silva',
    image:
      'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
    position: 'Back-end developer',
  },
  {
    name: 'Gabrielle Fernandez',
    image:
      'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Sales',
  },
  {
    name: 'Sadie Lewis',
    image:
      'https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Sales',
  },
  {
    name: 'Thilde Olaisen',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600',
    position: 'Marketing Lead',
  },
  {
    name: 'Deepika Ramesh',
    image:
      'https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg',
    position: 'Front-end developer',
  },
  {
    name: 'Jordi Santiago',
    image:
      'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: 'Front-end developer',
  },
  {
    name: 'Kerim Fahri',
    image:
      'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Back-end developer',
  },
]
