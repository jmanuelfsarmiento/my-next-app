import StyledComponentsRegistry from "./../lib/registry";

export const metadata = {
  title: "NextApp",
  description: "NextApp",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
