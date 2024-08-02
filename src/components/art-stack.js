import { Stack } from "@mui/material";
import art from "../constants/artConstants";
import ArtLayout from "./art-layout";

let artCards = art.map((project) =>
  <ArtLayout art={project} />
);

function ArtStack() {
  return (
    <Stack container spacing={8}>
        {artCards}
    </Stack>
  );
}

export default ArtStack;
