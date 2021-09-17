interface FooterListProps{
  title:string;
  items: Array<string>;
}

export default function FooterList(props: FooterListProps) {
  const { title, items } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">
        {title}
      </p>
      <ul className="list-unstyled">
        {items.map((item) => (
          <li className="mb-6">
            <a href="mailto: hi@store.gg" className="text-lg color-palette-1 text-decoration-none">{item}</a>
          </li>
        ))}
      </ul>
    </div>

  );
}
