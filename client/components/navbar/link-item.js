import { Link } from '@mui/material';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  return (
    <Link
      href={href}
      p={2}
      bgcolor={active ? 'grassTeal' : undefined}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};
export default LinkItem;
