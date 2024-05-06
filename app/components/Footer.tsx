export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <footer className="p-8 flex items-center container mx-auto mt-16 bg-indigo-950 rounded-t-3xl justify-center text-white">
        <p>
          Jake1.net and associated websites © Jake Jenkins and respective owners{" "}
          {year}. All rights reserved.
        </p>
      </footer>
    );
  }