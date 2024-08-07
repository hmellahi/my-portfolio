import Link from "next/link";

export default function Button({
  link,
  label,
  className,
  isExternal = false,
  isLink = true,
  ...args
}) {
  if (!isLink) {
    return (
      <button {...args} className={`primary-button ${className}`}>
        <span className="z-20">{label}</span>
      </button>
    );
  }

  if (isExternal){
    args.target = '_blank'
  }

  return (
    <Link
      {...args}
      href={link}
      rel="noopener noreferrer nofollow"
      className={`primary-button ${className}`}
    >
      <span className="z-20">{label}</span>
    </Link>
  );
}
