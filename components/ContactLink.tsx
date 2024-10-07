export default function ContactLink({
  contact,
  tabIndex,
}: {
  contact: { href: string; icon: any; text: string };
  tabIndex: number;
}) {
  return (
    <a
      tabIndex={tabIndex}
      className="text-lg flex items-center gap-3 hover:scale-125 transform transition-all duration-300 ease-in-out"
      href={contact.href}
    >
      <div className="flex justify-center items-center text-sm gap-2">
        <contact.icon className="text-2xl" />
        <p>{contact.text}</p>
      </div>
    </a>
  );
}
