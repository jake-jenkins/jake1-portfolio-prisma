import { SubmitButton } from "@/app/components/SubmitButton";
import { H1 } from "@/app/components/Typography";
import { redirect } from "next/navigation";

export default function Contact() {
  async function sendEmail(formData: FormData) {
    "use server";

    const rawDormData = {
      access_key: process.env.WEB3_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(rawDormData),
    });
    const result = await response.json();
    if (result.success) {
      redirect("/contact/sent");
    }
  }

  return (
    <div className="w-full max-w-[800px] ">
      <H1>Contact</H1>
      <form action={sendEmail}>
        <div className="my-8">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              className="mt-2 block w-full bg-transparent border border-indigo-300 px-4 py-3 outline-none"
              autoComplete="name"
              required
            />
          </label>
        </div>

        <div className="my-8">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              className="mt-2 block w-full bg-transparent border border-indigo-300 px-4 py-3 outline-none"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <div className="my-8">
          <label htmlFor="message">
            Message:
            <textarea
              name="message"
              className="mt-2 block w-full bg-transparent border border-indigo-300 px-4 py-3  outline-none"
              required
            />
          </label>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}