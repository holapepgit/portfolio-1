const ContactMe = () => {
  return (
    <form className="flex flex-col space-y-3 border w-1/2 mx-auto p-5 rounded bg-black/80">
      <input
        type="text"
        placeholder="Name"
        className="border px-2 py-1 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="border px-2 py-1 rounded"
      />

      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactMe;
