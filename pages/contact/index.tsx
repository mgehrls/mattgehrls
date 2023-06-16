import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function ValidateEmail(mail: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      name !== "" &&
      subject !== "" &&
      message !== "" &&
      ValidateEmail(email)
    ) {
      setIsSubmitting(true);

      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      try {
        if (response.ok) {
          setSubmitted(true);
        } else {
          throw new Error("Email sending failed");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="flex-1 order-2 h-full p-4"
      >
        <div className="flex h-full justify-center items-center">
          {!submitted ? (
            <div className="flex flex-col items-center justify-center max-w-xl w-screen h-full gap-8">
              <h1 className="text-3xl font-bold">Contact Me</h1>

              <form
                method="post"
                className="flex flex-col items-start w-full gap-2"
              >
                <div className="flex items-center justify-between w-full p-2">
                  <label htmlFor="name">*Name:</label>
                  <input
                    className="w-3/4 p-2 bg-teal-900 text-slate-100 focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between w-full p-2">
                  <label htmlFor="email">*Email:</label>
                  <input
                    className="w-3/4 p-2 bg-teal-900 text-slate-100 focus:outline-none"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between w-full p-2">
                  <label htmlFor="subject">*Subject:</label>
                  <input
                    className="w-3/4 p-2 bg-teal-900 text-slate-100 focus:outline-none"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between w-full p-2">
                  <label htmlFor="message">*Message:</label>
                  <textarea
                    className="w-3/4 p-2 bg-teal-900 text-slate-100 focus:outline-none"
                    id="message"
                    name="message"
                    placeholder="Leave feedback or comment here!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="transition-all self-center mt-4 px-6 py-3 bg-orange-700 hover:scale-125 hover:rounded-lg hover:font-bold focus:scale-125 focus:rounded-lg focus:font-bold"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          ) : (
            <div className="border border-white max-w-md flex flex-col gap-4 p-8 items-center justify-center mb-20 bg-zinc-900">
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-xl font-bold">Thanks for your message!</h1>
                <p className="text-slate-300 text-sm w-3/4 text-center">
                  {"I'll get back to you as soon as I can!"}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
