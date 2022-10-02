import Image from "next/future/image";
import Link from "next/link";
import contact from "../../public/contact.png";
import linkdinLogo from "../../public/linkdinLogo.png";

const Contact = () => {
  return (
    <div className="flex w-full mt-56 flex-col relative uppercase">
      <div className="w-full flex">
        <div className="border-3 w-1/4 flex  justify-end ">
          <h2 className="uppercase font-bold text-blue-600 text-3xl pr-5">
            Contact
          </h2>
        </div>
        <div className="w-3/4  flex items-center">
          <hr className="border-4 md:w-2/3 rounded" />
        </div>
      </div>

      <div className="w-3/4 flex flex-col pt-10 items-center justify-center">
        <form className="w-full">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="inline-full-name"
                type="text"
                placeholder="type your name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="inline-password"
                type="email"
                placeholder="type your email"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 pb-20"
                id="inline-password"
                placeholder="type your message"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-36 flex">
              <button
                className="rounded
                text-white
                 bg-slate-800 
                 lg:h-8 lg:w-32 flex 
                 items-center
                 justify-center 
                 font-bold hover:bg-blue-600
                 cursor-pointer md:w-28 md:h-6"
                type="button"
              >
                SEND
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <span className="uppercase font-light">
                You can also find me here
              </span>
              <Link
                href="https://www.linkedin.com/in/igorvargasp/"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={linkdinLogo}
                  width={50}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Image src={contact} width={800} className="absolute right-0" />
    </div>
  );
};

export default Contact;
