import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.9375279578273!2d20.99871301579942!3d52.24329507976361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccac5d3ec3bb%3A0x2de76f9e2930d53e!2sBiecka%20St%2C%20Warsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1684703587502!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Warsaw, Poland" />
        <MyInfo field="email" value="eagle9995.an@gmail.com" />
      </ul>
    </div>
  );
}
