import Swal from 'sweetalert2'
import Button from "@mui/material/Button";


export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d2405d5-f0f5-466b-889a-586287833edf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Success",
            text: "Message Sent Successfully!",
            icon: "success"
          });
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen">
      <form
        action=""
        onSubmit={onSubmit}
        className="max-w-xl w-full m-6  p-6 rounded-lg"
      >
        <h4 className="text-[#16325B] mb-2 font-bold text-center leading-loose text-xl">
          Contact Me
        </h4>
        <div>
          <label htmlFor="name" className="mt-5">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            id="name"
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="mt-5">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            id="email"
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor="message" className="mt-5">
            Message
          </label>
          <textarea
            name="message"
            type="text"
            placeholder="Enter your message"
            id="message"
            required
            className="field h-20 resize-none "
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          className="w-full h-12 mt-5 border-none rounded-lg cursor-pointer text-lg text-rose-50 font-semibold mt-6 duration-75 "
        >
          Submit
        </Button>
      </form>
    </section>
  );
}
