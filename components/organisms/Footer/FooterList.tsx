interface ListItemProps{
  name: string;
  href?: string;
}

interface FooterListProps{
  title:string;
  list: ListItemProps[];
}

export default function FooterList(props: FooterListProps) {
  const { title, list } = props;

  const ListItem = list.map((item : ListItemProps) => {
    const { name, href } = item;
    return (
      <li className="mb-6">
        <a href={href} className="text-lg color-palette-1 text-decoration-none">{name}</a>
      </li>
    );
  });

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">
        {title}
      </p>
      <ul className="list-unstyled">
        {ListItem}
      </ul>
    </div>
  );
}
