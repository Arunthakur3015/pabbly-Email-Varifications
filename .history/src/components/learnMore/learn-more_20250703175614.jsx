import { Typography } from "@mui/material";

export  function LearnMoreTypography({children,...props  }) {
    return(
        <Typography
          component="span"
          sx={{
            color: '078DEE',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
            Learn More
        </Typography>
    );
}