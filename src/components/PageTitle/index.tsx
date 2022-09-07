import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <Heading size="lg" fontWeight="normal">{children}</Heading>
  )
}