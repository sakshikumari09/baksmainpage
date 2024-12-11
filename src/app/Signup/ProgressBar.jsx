// import * as React from 'react';
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';

// export default function LinearDeterminate() {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           return 0;
//         }
//         const diff = Math.random() * 10;
//         return Math.min(oldProgress + diff, 100);
//       });
//     }, 500);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Box  sx={{ width: '100%' }}>
//       <LinearProgress variant="determinate" value={progress} />
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(251 191 36)',
    },
  },
});

export default function LinearDeterminate({ currentProgress, totalProgress }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(currentProgress);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={currentProgress} color="primary" />
      </Box>
    </ThemeProvider>
  );
}