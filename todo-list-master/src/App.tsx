import {PlusCircle} from "@phosphor-icons/react";
import { darkTheme } from "./Theme";
import {
  AppBar,
  Badge,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar
            sx={{
              paddingTop: theme.spacing(2),
              paddingBottom: theme.spacing(2),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media all": {
                minHeight: 200,
              },
            }}
          >
            <Typography variant='h5' component='h1'> sx={{
              display: 'flex',
              alignItems: 'center',
              gap:theme.spacing
            }}
            <CheckFat size={32} weight="fill" /> Lista de Tarefas
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container>
            <Grid container spacing={theme.spacing(0.5)}>
              <Grid item xl={10} sm={12}>
                <TextField name='task' fullWidth />
              </Grid>
              <Grid item xl={2} sm={12}>
                {/* <Button variant="contained" fullWidth>Criar</Button>
                <TextField variant="outlined" name="" */}
              </Grid>
            </Grid>
            <Grid container spacing={theme.spacing(1)}> 

              <Grid item>
                <Typography variant="caption" sx={{
                  display: 'flex',
                  alignItems: 'ccenter',
                  gap:
                }}>

                  <span>Trefas Criadas</span>
                  <Badge color="primary"badgeContent={0} showZero></Badge>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
