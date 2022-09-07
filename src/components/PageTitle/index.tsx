import { Heading } from "@chakra-ui/react";

interface PageTitleProps {
  children: string;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <Heading size="lg" fontWeight="normal">{children}</Heading>
  )
}