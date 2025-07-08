import { Typography } from "@mui/material";

export  function LearnMoreTypography({children,...props  }) {
    return(
        <Typography
          component="span"
          {...props}
          sx={{
            color: '078d',
            textDecoration: 'underline',
            cursor: 'pointer',
            ...props.sx
          }}
        >
            Learn More
        </Typography>
    );
}