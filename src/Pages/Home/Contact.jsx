import { useRef } from "react";
import EmailLottie from "../../../components/EmailLottie";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.loading("Sending Message", {
      duration: 2000,
    });

    emailjs
      .sendForm(
        "service_fcdrz7b",
        "template_uyx0zmf",
        form.current,
        "nQ59IwStphiSqwLAD"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully", {
            duration: 2000,
          });

          console.log(result.text);

          form.current.reset();
        },
        (error) => {
          toast.error("Error Sending Message", {
            duration: 2000,
          });

          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div id="contact" className="lg:mx-auto text-center  py-5">
        <h2 className="text-3xl font-bold mb-2 text-gray-200">Contact Me</h2>
        <div className="mx-auto w-24 h-1 mb-5 bg-secondary"></div>
      </div>
      <div className="container gap-4   mx-auto flex items-center justify-between lg:flex-row flex-col-reverse">
        <div className="mt-5 lg:mt-0 lg:w-2/3 w-full ">
          <div className="w-full px-8 py-8 mx-auto overflow-hidden   rounded-lg backdrop-blur-sm  ">
            <form ref={form} onSubmit={sendEmail} className="mt-6">
              <div className="flex-1">
                <label className="block mb-2 text-sm      text-gray-200">
                  Full Name
                </label>
                <input
                  required
                  name="from_name"
                  type="text"
                  placeholder="name"
                  className="block w-full px-5 py-3 mt-2      border   rounded-md   placeholder-gray-600   bg-gray-900   text-gray-300   border-gray-700    focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm      text-gray-200">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="from_email"
                  placeholder="name@example.com"
                  className="block w-full px-5 py-3 mt-2      border   rounded-md   placeholder-gray-600   bg-gray-900   text-gray-300   border-gray-700     focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="w-full mt-6">
                <label className="block mb-2 text-sm      text-gray-200">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="block w-full h-32 px-5 py-3 mt-2      border   rounded-md md:h-48   placeholder-gray-600   bg-gray-900   text-gray-300   border-gray-700    focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"></textarea>
              </div>
              <button
                type="submit"
                role="button"
                className=" mt-5 bg-black/50  text-gray-300 border px-2 py-2 rounded border-gray-300">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <EmailLottie />
      </div>
    </>
  );
};

export default Contact;
