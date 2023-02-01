import React from "react";

const Faq = () => {
  return (
    <div className="mt-4">
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            FAQ Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                How long we deliver your first blog post?
              </h3>
              <p className="mt-1 text-gray-600">
                {" "}
                It takes 2-3 weeks to get your first blog post ready. That
                includes the in-depth research & creation of your monthly
                content marketing strategy that we do before writing your first
                blog post, Ipsum available .
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What are the main challenges of?
              </h3>
              <p className="mt-1 text-gray-600">
                {" "}
                Common issues in.... Poor quality of data.... Non-representative
                training data. ... Overfitting and Underfitting. ... Monitoring
                and maintenance. ... Getting bad recommendations. ... Lack of
                skilled resources. ... Customer Segmentation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is the future?</h3>
              <p className="mt-1 text-gray-600">
                {" "}
                From predicting the spread of the COVID-19 virus to supporting
                cutting-edge cancer research, C & C++ can disrupt and transform
                every single segment of society.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is the limitations?</h3>
              <p className="mt-1 text-gray-600">
                Image result Poor transfer learning ability, reusability of
                modules, and integration. Systems are opaque, making them very
                hard to debug. Performance cannot be audited or guaranteed at
                the 'long tail' They encode correlation, not causation or
                ontological relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
