import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { AccountTreeRounded, HomeRounded, PersonRounded } from '@mui/icons-material';

const breadcrumbData = [
  { path: '/', label: 'Home', icon: <HomeRounded color='primary' fontSize='small' /> },
  { path: '/Users', label: 'Users', icon: <PersonRounded color='primary' fontSize='small' /> }, // Adicione os emojis ou ícones desejados
  { path: '/Projects', label: 'Projects', icon: <AccountTreeRounded color='primary' fontSize='small'/> },
];

function generateBreadcrumbs(pathnames) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const breadcrumb = breadcrumbData.find((item) => item.path === to);

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumb.icon && <span>{breadcrumb.icon} </span>}
            {breadcrumb.label}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            to={to}
            key={to}
            color="inherit"
            underline="hover"
          >
            {breadcrumb.icon && (
              <IconButton size="small" color="inherit">
                {breadcrumb.icon}
              </IconButton>
            )}
            {breadcrumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

function RouterBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return <div>{generateBreadcrumbs(pathnames)}</div>;
}

export default RouterBreadcrumbs;
