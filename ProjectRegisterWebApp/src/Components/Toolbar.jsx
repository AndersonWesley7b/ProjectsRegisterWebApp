import { AccountTreeRounded, HomeRounded, PersonRounded } from "@mui/icons-material";
import { ListItemIcon, ListItemText, List, ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ToolbarPr() {
  const Navigate = useNavigate();

  return (
    <>
      <List>
        {[{ Title: 'Home', Icon: <HomeRounded color='primary' />, path: '/' },
        { Title: 'Projetos', Icon: <AccountTreeRounded color='primary' />, path: '/Projects' },
        { Title: 'Usuários', Icon: <PersonRounded color='primary' />, path: '/Users' }].map((item) => (
          <ListItem key={item.Title} disablePadding sx={{ display: 'block' }} onClick={() => {
            Navigate(`${item.path}`)
          }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.Icon}
              </ListItemIcon>
              <ListItemText primary={item.Title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>

  )
}

export default ToolbarPr;
