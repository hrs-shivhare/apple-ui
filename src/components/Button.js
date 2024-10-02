import { styled } from "@mui/system";
import { Button as BaseButton } from "@mui/base/Button";

const Button = styled(BaseButton)(({ theme }) => ({
  color: "white",
  fontSize: "13px",
  backgroundColor: theme.palette.primary,
  lineHeight: "16px",
  backgroundImage: `linear-gradient(180deg, rgb(255 255 255 / 17%), transparent)`,
  boxShadow: `0 1px 2.5px 0 rgb(from ${theme.palette.primary} r g b / 24%), 0 0 0 0.5px rgb(from ${theme.palette.primary} r g b / 12%)`,
  border: 0,
  borderRadius: 5,
  padding: "6px 12px",
  cursor: "pointer",
  transition: "background-image 0.3s ease",

  "&:active": {
    backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 17%), transparent)`,
  },
}));

export default Button;
