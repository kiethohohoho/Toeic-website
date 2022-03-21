import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function CoursesSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        className="flex-col"
        variant="rectangular"
        width={280}
        height={150}
        animation="wave"
        sx={{ borderRadius: 3 }}
      />
      <Skeleton width={130} height={25} animation="wave" />
      <Skeleton width={200} height={25} animation="wave" />
      <Skeleton width={290} height={25} animation="wave" />
    </Stack>
  );
}
