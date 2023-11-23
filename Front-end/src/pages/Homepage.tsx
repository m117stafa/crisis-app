import urban from '../assets/urban-individual-seeking-help.png';



export default function Home() {

  return (
    <div className="bg-white">
      <div className="isolate px-6 pt-1 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-[13%]">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Check our community blogs for safety mesures.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className=" flex items-center h-[100%]">
            <div className='max-w-2xl'>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Crisis Guardian
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Empower Your Response, Ensure Your Safety: Introducing Crisis Guardian – Your Trusted Ally in Times of Turmoil. Instant Alerts, Real-time Updates, and Seamless Coordination. Face Challenges with Confidence, Navigate Crisis Together.
                </p>

            </div>
            <div className='ml-8 h-full max-w-full'>
                <img className='object-cover' src={urban} />
            </div>
            
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign Up
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">→</span>
                </a>
                </div>
        </div>
      </div>
    </div>
  )
}
