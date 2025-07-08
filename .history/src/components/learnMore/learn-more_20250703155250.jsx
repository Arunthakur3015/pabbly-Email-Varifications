import { Typography } from "@mui/material";

export default function LearnMoreTypography(){
    return(
        <Typography
        component="span"
        {...props}
        sx={{
            color: "text.primary",
            textDecoration: "underline",
            cursor: "pointer",
            ...props
        }}>

        </Typography>
    )
}