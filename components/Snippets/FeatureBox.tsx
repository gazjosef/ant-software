interface FeatureBoxProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureBox({
  children,
  title,
  description,
}: FeatureBoxProps) {
  return (
    <div className="feature-box">
      {children}
      <h2 className="feature-box__title | u-margin-bottom-small">{title}</h2>
      <p className="paragraph">{description}</p>
    </div>
  );
}
