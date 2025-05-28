import React from "react";
import { Card, CardMedia, CardContent, Box } from "@mui/material";
import Typography from "../../atoms/Typography";
import CustomButton from "../../atoms/Button";

interface BookProps {
  id: number;
  title: string;
  author: string;
  time: string;
  reads: string;
  image: string;
  isFinished: boolean;
  onToggle: (id: number) => void;
  clockIcon: React.ReactNode;
  userIcon: React.ReactNode;
}

const BookCard: React.FC<BookProps> = ({
  id,
  title,
  author,
  time,
  reads,
  image,
  isFinished,
  onToggle,
  clockIcon,
  userIcon,
}) => {
  return (
    <Card
      sx={{
        width: 260,
        height: 400,
        m: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              color: "hsla(202, 92%, 15%, 1)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <Box display="flex" justifyContent="space-between" mt={1} mb={1}>
            <Box display="flex" alignItems="center" gap={0.5}>
              {clockIcon}
              <Typography variant="caption" color="text.secondary">
                {time}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              {userIcon}
              <Typography variant="caption" color="text.secondary">
                {reads}
              </Typography>
            </Box>
          </Box>
        </Box>
        <CustomButton
          label={isFinished ? "Read again" : "Finished"}
          onClick={() => onToggle(id)}
        />
      </CardContent>
    </Card>
  );
};

export default BookCard;
