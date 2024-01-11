import Navbar from "../componants/navbar";
import Footer from "../componants/page";
import Link from "next/link";

const Huddies = () => {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font ml-10 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11  shadow-lg  ">
              <Link
                href="/products/tutorial"
                // as="/product/some-product-slug"
                className="block relative  rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="  h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/l/a/v/l-edrfgb-try-this-original-imagk9qezaadn5n4.jpeg?q=70"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
              /
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              
              <Link
                href="/products/hello"
                // as="/product/some-product-slug"
                className="block relative  rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/z/h/xl-togrwthdfulsweat-st15-tripr-original-imagvbp5nwbkfzaq.jpeg?q=70"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/l/a/v/l-edrfgb-try-this-original-imagk9qezaadn5n4.jpeg?q=70"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/z/h/xl-togrwthdfulsweat-st15-tripr-original-imagvbp5nwbkfzaq.jpeg?q=70"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/z/h/xl-togrwthdfulsweat-st15-tripr-original-imagvbp5nwbkfzaq.jpeg?q=70"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/z/h/xl-togrwthdfulsweat-st15-tripr-original-imagvbp5nwbkfzaq.jpeg?q=70"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">₹499.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/z/h/xl-togrwthdfulsweat-st15-tripr-original-imagvbp5nwbkfzaq.jpeg?q=70"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">₹499.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full pl-11 shadow-lg ">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[36vh] w-[27vh]"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/z/h/xl-togrwthdfulsweat-st15-tripr-original-imagvbp5nwbkfzaq.jpeg?q=70"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts{" "}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">₹499.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Huddies;


