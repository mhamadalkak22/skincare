import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since you cannot use next-intl APIs here, this layout only serves as a shell
// for the overall page structure that does not rely on i18n.
export default function RootLayout({ children }: Props) {
  return children;
}
