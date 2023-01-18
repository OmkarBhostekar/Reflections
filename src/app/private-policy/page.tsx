import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col justify-center items-center p-4">
      <div className="w-[98%] py-12 md:w-[95%] lg:w-[60%]">
        <h1 className="text-2xl font-medium mb-6 text-center">Privacy Policy</h1>
        <h2 className="text-xl font-medium">Information We Collect</h2>
        <p className="text-base leading-relaxed">
          At Reflection, we are committed to protecting the privacy and security
          of our users. This Privacy Policy explains how we collect, use, and
          share information about you when you use our website, services, and
          mobile applications (collectively, the "Services").
        </p>
        <ul className="list-decimal text-base leading-relaxed">
          <li>
            Information you provide to us directly, such as when you create an
            account or submit content. This may include your name, email
            address, and other contact information.
          </li>
          <li>
            Information about your use of the Services, such as the content you
            view and the actions you take.
          </li>
          <li>
            Information about your device, such as your IP address and browser
            type.
          </li>
        </ul>
        <h2 className="text-xl font-medium">Security</h2>
        <p className="text-base leading-relaxed">
          We take the security of your information seriously. We have
          implemented technical and organizational measures designed to protect
          your information from unauthorized access, use, or disclosure.
          However, no method of electronic storage or transmission is 100%
          secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-medium">Changes to This Privacy Policy</h2>
        <p className="text-base leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>
        <div className="bg-gray-200 py-4 px-6 mt-14">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-base leading-relaxed">
            If you have any questions about this Privacy Policy, please{" "}
            <Link className="text-primary-600" href="contact">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
