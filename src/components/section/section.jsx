const Section = ({ separator = true, title, subtitle, children }) => (
  <>
    {separator && <hr />}
    <section>
      {title && (
        <header>
          <h2>{title}</h2>
        </header>
      )}
      {subtitle && (
        <p>
          <em>{subtitle}</em>
        </p>
      )}
      <aside>{children}</aside>
    </section>
  </>
);

export default Section;
