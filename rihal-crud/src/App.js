import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Statistics from './Statistics';

import Feature1Image from './images/feature1.png';
import Feature2Image from './images/feature2.png';
import Feature3Image from './images/feature3.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [students, setStudents] = useState([]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: `'Roboto', 'Arial', sans-serif`,
    },
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const initialStudents = [
    { id: 1, name: 'John Doe', class_id: 101, country: 'USA', date_of_birth: '2002-01-15' },
    { id: 2, name: 'Jane Smith', class_id: 102, country: 'UK', date_of_birth: '1998-05-10' },
    { id: 3, name: 'Ahmed Ali', class_id: 101, country: 'UAE', date_of_birth: '2000-09-23' },
    { id: 4, name: 'Fatima Khan', class_id: 103, country: 'Pakistan', date_of_birth: '1995-03-14' },
  ];

  const addDateFields = (studentsList) => {
    return studentsList.map(student => ({
      ...student,
      CreatedDate: student.CreatedDate || new Date().toISOString(),
      ModifiedDate: student.ModifiedDate || new Date().toISOString(),
    }));
  };

  useEffect(() => {
    setStudents(addDateFields(initialStudents));
  }, []);

  const updateStudent = (id) => {
    const updatedStudents = students.map(student =>
      student.id === id
        ? {
            ...student,
            name: `${student.name} (Updated)`,
            ModifiedDate: new Date().toISOString(),
          }
        : student
    );
    setStudents(updatedStudents);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Header */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Rihal CRUD App
            </Typography>
            <nav>
              <Button
                color="inherit"
                onClick={() => setActivePage('home')}
                sx={{ marginRight: '10px' }}
              >
                Home
              </Button>
              <Button color="inherit" onClick={() => setActivePage('statistics')}>
                Statistics
              </Button>
            </nav>
            {/* Dark/Light Mode Toggle */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDarkMode}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container sx={{ marginTop: '20px', padding: '20px' }}>
          {activePage === 'home' && (
            <>
              <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                Welcome to Rihal CRUD App
              </Typography>

              <Typography variant="h6" align="center" paragraph sx={{ marginBottom: '30px' }}>
                Manage and analyze your data with ease using Rihal&apos;s powerful features. Explore the project below!
              </Typography>

              {/* Explore Features Button */}
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: '12px 25px', fontSize: '16px', marginBottom: '20px' }}
                  onClick={() => alert('Explore features clicked!')}
                >
                  Explore Features
                </Button>
              </div>

              {/* Project Features Grid */}
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={Feature1Image}
                      alt="Feature 1"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">
                        Manage your students&apos; data with ease. Track classes, countries, and birthdays.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={Feature2Image}
                      alt="Feature 2"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">
                        View real-time statistics on your project, making decision-making easier.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={Feature3Image}
                      alt="Feature 3"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">
                        Edit student details and project settings directly within the app.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Divider sx={{ margin: '40px 0' }} />
            </>
          )}
          {activePage === 'statistics' && <Statistics students={students} updateStudent={updateStudent} />}
        </Container>

        {/* Footer */}
        <footer
          style={{
            padding: '10px 0',
            textAlign: 'center',
            background: theme.palette.background.paper,
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: 1000,
            boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="body2" color="textSecondary">
            &copy; 2024 Rihal CRUD App. All Rights Reserved.
          </Typography>
        </footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
