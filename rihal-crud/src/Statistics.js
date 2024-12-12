import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Stack, Box, Divider, useMediaQuery } from '@mui/material';

// Statistics Component
const Statistics = ({ students }) => {
  const isMobile = useMediaQuery('(max-width: 600px)'); // Use this to detect if the screen is mobile-sized

  // Count students per class
  const studentsPerClass = students.reduce((acc, student) => {
    acc[student.class_id] = (acc[student.class_id] || 0) + 1;
    return acc;
  }, {});

  // Count students per country
  const studentsPerCountry = students.reduce((acc, student) => {
    acc[student.country] = (acc[student.country] || 0) + 1;
    return acc;
  }, {});

  // Calculate average age of students
  const calculateAverageAge = (students) => {
    const today = new Date();
    const ages = students.map((student) => {
      const birthDate = new Date(student.date_of_birth);
      return today.getFullYear() - birthDate.getFullYear();
    });
    return (ages.reduce((sum, age) => sum + age, 0) / students.length).toFixed(2);
  };

  // Calculate average time since created (in days)
  const calculateAverageTimeSinceCreated = (students) => {
    const today = new Date();
    const times = students.map((student) => {
      const createdDate = new Date(student.createdDate);
      return Math.floor((today - createdDate) / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    });
    return (times.reduce((sum, time) => sum + time, 0) / students.length).toFixed(2);
  };

  const averageAge = calculateAverageAge(students);
  const averageTimeSinceCreated = calculateAverageTimeSinceCreated(students);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f6f8' }}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        Student Statistics
      </Typography>

      <Stack spacing={4} alignItems="center">
        {/* Students Per Class */}
        <Card elevation={6} sx={{ width: isMobile ? '100%' : '650px', borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Students Per Class
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {Object.entries(studentsPerClass).map(([classId, count]) => (
                <li key={classId} style={{ marginBottom: '12px' }}>
                  <Typography variant="body1" color="textSecondary">
                    <strong>Class {classId}:</strong> {count} students
                  </Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Students Per Country */}
        <Card elevation={6} sx={{ width: isMobile ? '100%' : '650px', borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Students Per Country
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {Object.entries(studentsPerCountry).map(([country, count]) => (
                <li key={country} style={{ marginBottom: '12px' }}>
                  <Typography variant="body1" color="textSecondary">
                    <strong>{country}:</strong> {count} students
                  </Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Average Age */}
        <Card elevation={6} sx={{ width: isMobile ? '100%' : '650px', borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Average Age of Students
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Typography variant="h3" color="primary" align="center">
              {averageAge} years
            </Typography>
          </CardContent>
        </Card>

        {/* Average Time Since Created */}
        <Card elevation={6} sx={{ width: isMobile ? '100%' : '650px', borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Average Time Since Created
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Typography variant="h3" color="primary" align="center">
              {averageTimeSinceCreated} days
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

Statistics.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    class_id: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
  })).isRequired,
};

export default Statistics;
