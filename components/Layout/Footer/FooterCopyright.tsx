const currentYear: number = new Date().getFullYear();

export default function FooterCopyright() {
  return (
    <section className="u-margin-top-medium ">
      <p className="u-center-text u-margin-x-auto">
        Copyright <span className="u-clr-secondary-100">&copy;</span> Ant
        Software {currentYear}
      </p>
    </section>
  );
}
