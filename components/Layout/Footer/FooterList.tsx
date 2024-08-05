interface FooterListProps {
  children: React.ReactNode;
}

export default function FooterList({ children }: FooterListProps) {
  return (
    <ul role="list" className="u-flex u-align-center u-justify-between u-gap-1">
      {children}
    </ul>
  );
}
